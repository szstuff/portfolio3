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
    <nav className='bg-[color:var(--secondary)] h-[60px] content-center overflow-hidden'>
        <div className=' px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between text-[color:var(--primary)]'>
                <div className='flex flex-1 items-center md:justify-start'>

                    {/* If user is not at landing page/root: load appropriate title and back button */}
                    {id && (
                        <div className='flex animateload'>
                            <Link to={"/"}><FaArrowLeft className='ml-2 mr-4 h-[60px] size-6'/></Link>
                            <h3 className='h-[60px] content-center text-2xl sm:text-3xl md:text-4xl'> {portfolioitems[id]?.title ?? "Stilian Zagorov"} </h3>
                        </div>
                    )}
                    
                    {/* If user is not at landing page/root: hide scroll div 
                        using css hide instead of conditional rendering (because 
                        the latter breaks the scroll effect when navigating back to root from a path)
                    */}
                    <div ref={scrollRef} className={`h-[60px] overflow-y-hidden px-4 pt-6 shrink-0 ${id && 'hidden'}`} >
                        {portfolioitems.map((item, index) => (
                            <div key={item.id} ref={(el) => setRef(el, index)}
                                className='content-center pt-2'
                            >
                                {item.title != "" && (
                                <h3 className='h-[5vh] p-y-1 my-1 text-2xl sm:text-3xl md:text-4xl'> {item.title} </h3>
                                )}
                            </div>
                        ))
                        }
                    </div>
                </div>
                <Link to={"https://github.com/szstuff/"} target='_blank' 
                    className={`transition-all duration-500 transform bg-[var(--secondary)] px-2
                        ${currentCardId != 0 ? ' translate-y-0' : ' translate-y-32 '}`}>
                    <p className= "px-2 py-1 md:mx-2 md:px-8 text-sm sm:text-lg md:text-xl border-slate-200 border-2 rounded-lg hover:bg-slate-200 hover:text-slate-700"> 
                        github 
                    </p>
                </Link>
                <Link to={"https://www.linkedin.com/in/stilianz/"} target='_blank' 
                    className={`transition-all duration-500 transform bg-[var(--secondary)] px-2
                        ${currentCardId != 0 ? ' translate-y-0' : ' translate-y-32 '}`}>
                    <p className="px-2 py-1 md:mx-2 md:px-8 text-sm sm:text-lg md:text-xl  border-slate-200 border-2 rounded-lg hover:bg-slate-200 hover:text-slate-700">
                        linkedin
                    </p>                
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Header
