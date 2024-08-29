import React, { useEffect, useRef, useState, useContext } from 'react';
import Card from './Card';
import { UserContext } from '../App';
import { ScrollContext } from '../App';

const arr = [
    {id: 0, title: "hei", body: "tasdasdasd"},
    {id: 1, title: "hei", body: "tasdasdasd"},
    {id: 2, title: "hei", body: "tasdasdasd"},
    {id: 3, title: "hei", body: "tasdasdasd"}
];

const Main = () => {
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
            }, { threshold: 0.5 } // Treat card as in viewport when 10% is visible
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
        console.log("Elements currently in view:", elementsInView);
        setCurrentCardId(elementsInView[0])   
        }, [elementsInView]);

    // useEffect(() => {
    //     elementsRef.current.forEach(ref => {
    //         console.log("evaluating ref " + ref.id + "  current: " + elementsInView[0])
    //         if (ref.id < elementsInView[0]) {
    //             console.log("ref " + ref.id + "assigned card before")
    //             ref.className=`scroll-mt-12 snap-start shrink-0 border-black border-4 rounded-lg z-[${ref.id}] w-96 h-[80vh] bg-slate-100 -my-6 p-4 shadow-xl card-before`
    //         } else if (ref.id == elementsInView[0]) {
    //             console.log("ref " + ref.id + "assigned card main")
    //             ref.className=`scroll-mt-12 snap-start shrink-0 border-black border-4 rounded-lg z-[${ref.id}] w-96 h-[80vh] bg-slate-100 -my-6 p-4 shadow-xl card-main`
    //         } else {
    //             console.log("ref " + ref.id + "assigned card default")
    //             ref.className=`scroll-mt-12 snap-start shrink-0 border-black border-4 rounded-lg z-[${ref.id}] w-96 h-[80vh] bg-slate-100 -my-6 p-4 shadow-xl card`
    //         }
    // })}, [elementsInView])


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
        <div ref={scrollRef} className='bg-blue-100 h-[calc(100vh-30px)] snap-y snap-mandatory overflow-y-scroll'>
            <div className='container p-4'>
                <div className='grid gap-4'>
                    <div className='relative flex-col gap-6 pb-14'>
                        {arr.map((item, index) => (
                            <Card 
                                ref={(el) => elementsRef.current[index] = el}  // Assign ref to each element
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                body={item.body}
                                
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;