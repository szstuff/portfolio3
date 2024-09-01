import React, { useContext, useRef, useEffect } from 'react'
import { UserContext } from '../App'
import { ScrollContext } from '../App';
import {portfolioitems} from '../assets/portfolioitems.json'


const Header = () => {
    const { currentCardId } = useContext(UserContext);
    const scrollRef = useRef(null);
    const targetRefs = useRef([]);

    // Initialize targetRefs
    useEffect(() => {
        targetRefs.current = targetRefs.current.slice(0, portfolioitems.length+1);
    }, [portfolioitems.length]);

    // Scroll to specific element when currentCardId changes
    useEffect(() => {
        if (currentCardId) {
            if (scrollRef.current) {
                const targetElement = targetRefs.current[currentCardId];
                if (targetElement) {
                    console.log(`Scrolling to ${portfolioitems[currentCardId].id}`);
                    scrollRef.current.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.log(`No ref found for currentCardId ${currentCardId}`);
                }
            } else {
                console.log(`No valid currentCardId found for currentCardId: ${currentCardId}`);
            }
        }
    }, [currentCardId]);

    const setRef = (el, index) => {
        if (el && !targetRefs.current[index]) {
            targetRefs.current[index] = el;
            console.log(`Added ${portfolioitems[index].id} to targetRefs`);
        }
    };
  return (
    <nav className='bg-[color:var(--secondary)] h-[60px] content-center'>
        <div className=' px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between text-[color:var(--primary)]'>
                <div className='flex flex-1 items-center md:justify-start'>
                    <div ref={scrollRef} className='h-[60px] overflow-y-hidden px-4 pt-6 '>
                        {portfolioitems.map((item, index) => (
                            <div key={item.id} ref={(el) => setRef(el, index)}
                                className='content-center pt-2'
                            >
                                <h3 className='h-[5vh] p-y-2 my-2 text-4xl'> {item.title} </h3></div>
                        ))
                        }
                    </div>
                </div>
                    <li className='px-3'> github</li>
                    <li className='px-3'> linkedin</li>
                    <li className='px-3'> contact</li>
                </div>
            </div>
    </nav>
  )
}

export default Header
