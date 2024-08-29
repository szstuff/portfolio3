import React, { useContext, useRef, useEffect } from 'react'
import { UserContext } from '../App'
import { ScrollContext } from '../App';

const arr = [
    {id: 0, title: "ZLab", body: "tasdasdasd"},
    {id: 1, title: "3D Print website", body: "tasdasdasd"},
    {id: 2, title: "3D print website", body: "tasdasdasd"},
    {id: 3, title: "hei", body: "tasdasdasd"}
];



const Header = () => {
    const { currentCardId } = useContext(UserContext);
    const scrollRef = useRef(null);
    const targetRefs = useRef([]);

    // Initialize targetRefs
    useEffect(() => {
        targetRefs.current = targetRefs.current.slice(0, arr.length);
    }, [arr.length]);

    // Scroll to specific element when currentCardId changes
    useEffect(() => {
        if (currentCardId) {
            if (scrollRef.current) {
                const targetElement = targetRefs.current[currentCardId];
                if (targetElement) {
                    console.log(`Scrolling to ${arr[currentCardId].id}`);
                    targetRefs.current[0].className='behind'
                    targetRefs.current[1].className='behind'
                    targetRefs.current[2].className='behind'
                    targetRefs.current[3].className='behind'
                    targetElement.className='on-top'
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
            console.log(`Added ${arr[index].id} to targetRefs`);
        }
    };
  return (
    <nav className='bg-red-400 border-b border-blue-300 h-[30px]'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-1 items-center md:justify-start'>
                    <p> stilian zagorov </p>
                    <div ref={scrollRef} className='h-[30px] overflow-y-hidden px-4 pt-6'>
                        {arr.map((item, index) => (
                            <div key={item.id} ref={(el) => setRef(el, index)}><p className='h-[5vh] p-y-2 my-2'> {item.id} : {item.title} </p></div>
                        ))
                        }
                    </div>
                </div>
                    <li> 1</li>
                    <li> 2</li>
                    <li> 3</li>
                    <li> 4</li>
                </div>
            </div>
    </nav>
  )
}

export default Header
