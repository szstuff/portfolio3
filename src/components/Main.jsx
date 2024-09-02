import React, { useEffect, useRef, useState, useContext } from 'react';
import Card from './Card';
import { UserContext } from '../App';
import { ScrollContext } from '../App';
import LandingCard from './LandingCard';

const Main = ({portfolioitems}) => {
    const { currentCardId, setCurrentCardId } = useContext(UserContext);
    const elementsRef = useRef([]);  // Array of refs for each element
    const [elementsInView, setElementsInView] = useState([]); // Array of elements that are in viewport

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const elementId = entry.target.getAttribute('id');
                    if (entry.isIntersecting) {
                        setElementsInView(prevElements => 
                            !prevElements.includes(elementId) ? [...prevElements, elementId] : prevElements
                        );
                    } else {
                        setElementsInView(prevElements =>
                            prevElements.filter(id => id !== elementId)

                        );
                    }                   
                });
            }, { threshold: 0.8 } // Treat card as in viewport when x% is visible
        );   

        // Observe each element
        elementsRef.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            elementsRef.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        setCurrentCardId(elementsInView[0])  
        console.log("Elements currently in view:", elementsInView);
        console.log("Elements in total:", elementsRef);
        }, [elementsInView]);

    //Header-main view scroll sync logic
    const {setScrollY} = useContext(ScrollContext)
    const scrollRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(scrollRef.current.scrollTop)
        }
    
        const element = scrollRef.current
        element.addEventListener('scroll', handleScroll)
        return () => {
            element.removeEventListener('scroll', handleScroll)
        }
        }, [setScrollY])

        return (
            <div ref={scrollRef} className='bg-[color:var(--secondary)] h-[calc(100vh-60px)] snap-y snap-mandatory scroll-p-4 overflow-y-scroll relative'>
                <div className='container'>
                    <div className='relative'>
                        {portfolioitems.map((item, index) => (
                            // id 0 is reserved for landing card 
                            index == 0 ? (
                            <LandingCard 
                                ref={(el) => elementsRef.current[index] = el} 
                                key={index}
                                index={index} 
                            />
                            ) : (
                            <Card 
                                ref={(el) => elementsRef.current[index] = el}  
                                key={item.id} 
                                item={item}
                                index={index}
                            />
                            )
                        ))}
                    </div>
                </div>
            </div>
        );
};

export default Main;