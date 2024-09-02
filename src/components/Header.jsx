import React, { useContext, useRef, useEffect, useState } from 'react'
import { UserContext } from '../App'
import { ScrollContext } from '../App';
import {portfolioitems} from '../assets/portfolioitems.json'
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useLocation, useParams } from 'react-router-dom';


const Header = ({id}) => {
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
            const targetElement = targetRefs.current[currentCardId];
            if (scrollRef.current && targetElement) {
                if (targetElement) {
                    scrollRef.current.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.removeEventListener("scroll")
            }
        }
    }, [currentCardId]);

    const setRef = (el, index) => {
        if (el && !targetRefs.current[index]) {
            targetRefs.current[index] = el;
        }
    };
  return (
    <nav className='bg-[color:var(--secondary)] h-[60px] content-center'>
        <div className=' px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between text-[color:var(--primary)]'>
                <div className='flex flex-1 items-center md:justify-start'>

                    {/* If user is not at landing page/root: load appropriate header title */}
                    {id && (
                        <div className='flex animateload'>
                            <Link to={"/"}><FaArrowLeft className='ml-2 mr-4 h-[60px] size-6'/></Link>
                            <h3 className='h-[60px] content-center text-2xl sm:text-3xl md:text-4xl'> {portfolioitems[id]?.title ?? "Stilian Zagorov"} </h3>
                        </div>
                    )}
                    
                    {/* If user is not at landing page/root: hide scroll div 
                        using css hide instead of conditional rendering because 
                        the latter breaks the scroll effect when navigating to root from a path
                    */}
                    <div ref={scrollRef} className={`h-[60px] overflow-y-hidden px-4 pt-6 shrink-0 ${id && 'hidden'}`} >
                        {portfolioitems.map((item, index) => (
                            <div key={item.id} ref={(el) => setRef(el, index)}
                                className='content-center pt-2'
                            >
                                <h3 className='h-[5vh] p-y-1 my-1 text-2xl sm:text-3xl md:text-4xl'> {item.title} </h3></div>
                        ))
                        }
                    </div>
                </div>
                    <p className='px-3 sm:text-lg md:text-xl'> github</p>
                    <p className='px-3 sm:text-lg md:text-xl'> linkedin</p>
                    <p className='px-3 sm:text-lg md:text-xl'> contact</p>
                </div>
            </div>
    </nav>
  )
}

export default Header
