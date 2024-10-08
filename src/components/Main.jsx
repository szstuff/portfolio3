import React, { useEffect, useRef, useState, useContext } from 'react';
import Card from './Card';
import { UserContext } from '../App';
import { ScrollContext } from '../App';
import LandingCard from './LandingCard';
import FilterOptions from './FilterOptions';

const Main = ({portfolioitems, scrollTo}) => {
    const { currentCardId, setCurrentCardId } = useContext(UserContext);
    const elementsRef = useRef([]);  // Array of refs for each element
    const [elementsInView, setElementsInView] = useState([]); // Array of elements that are in viewport
    const [filters, setFilters] = useState([]);

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

    //Update currentCardID by picking the topmost element in view.
    useEffect(() => {
        //Sort compares items as strings by default. This function compares the int value. 
        elementsInView.sort(function(a, b) {
            return a-b
        })
        setCurrentCardId(elementsInView[0]) 
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


        const renderCard = (item, index, filters) => {
            switch(item.type){
                case "landingCard":
                    return ( 
                        <LandingCard 
                            ref={(el) => elementsRef.current[index] = el} 
                            key={index}
                            index={index} 
                            filters={filters}
                            setFilters={setFilters}
                        />
                    )
                case "filtersCard": 
                    return (
                        <FilterOptions key={index} filters={filters} setFilters={setFilters}/>
                    )
                default: 
                //If default, the item is a normal portfolio item 
                //if no filters || item's filters include at least one (.some) of the chosen filters, render card 
                    if (filters.length == 0 || item.applicableFilters.some(filterText => filters.includes(filterText))){
                    return (
                        <Card 
                            ref={(el) => elementsRef.current[index] = el}  
                            key={index} 
                            item={item}
                            index={index}
                        /> 
                    )
                } else {
                    // If no applicable filters, don't render card 
                    return null
                }
            }
        }

        return (
            <div ref={scrollRef} className='bg-[color:var(--secondary)] w-screen h-[calc(100vh-60px)] snap-y snap-mandatory scroll-p-4 overflow-y-scroll'>
                <div className='container mb-28 max-w-max h-[lvh-60]'>
                        {portfolioitems.map((item, index) => (
                            renderCard(item, index, filters)    
                        ))}
                </div>
                <p className='text-xl font-light text-slate-300 mx-[10%]'>Made by stilian.dev with ❤️. <a target='_blank' href='https://github.com/szstuff/portfolio3' className='text-blue-300 underline'> Fork this website. </a></p>
            </div>
        );
};

export default Main;