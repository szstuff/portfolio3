import React, { useContext, useRef, useEffect } from 'react'
import { UserContext } from '../App'
import { ScrollContext } from '../App';


// Tech object: 
// tech { "category": ["tech1", "tech2"] }
// --------category: Backend, Frontend, Other
// links { "type": "url" }
// ---------type: try_demo, try_prod (red), app_store, github, read_more, other string (normal)
// media/logo ["url"] (filename or path from /src/assets/media/)
//
// For design projects:  
// designed_in ["designappname"]


const arr = [
    {id: 0, title: "ZLab", description: "Webapp for 3D-print on-demand service",
        description: "ZLab is a concept webapp designed for a 3D-print on-demand service. The USP of the application is it's automatic quote calculator that accurately determines the quantity of material required for a model.",
        tech: {
            "Backend": [".Net 8"],
            "Frontend": ["MVVM", "Razor Views", "Bootstrap", "Three.JS"],
            "Others": ["Self-hosted", "SQLite", "ASP.NET Identity", "Email Sender with Brevo", "Localization", "Custom bash-scripts slice and parse g-code"]
        }, 
        links: {
            "try_demo": "https://zlab.no"
        },
        media: [
            "zlab_demo_1.jpg"
            ]
    },
    {id: 1, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        description: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"],
        media: ["pasty_1.jpeg"]
    },
    {id: 2, title: "EPS VR Demo",  description: "Designed for generic HMDs",
        description: "The application allows the user to look around a simulation of one of my prototypes collecting floating trash in the ocean. It runs on Unity using a custom camera rig controller that addresses the shortcomings of the headset used - including IPD adjustment in software and gyroscope-based tracking (as opposed to true spatial tracking).",
        tech: {
            "Backend": ["Unity3D"],
            "Others": ["SwiftData"]
            //TODO: add design tools
        },
        media: ["vr_trash_demo_1.mov"]
    },
    {id: 3, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        description: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"],
        media: ["pasty_1.jpeg"]
    },
    {id: 4, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        description: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"],
        media: ["pasty_1.jpeg"]
    },
    {id: 5, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        description: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"],
        media: ["pasty_1.jpeg"]
    },
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
                    <li className='px-3'> github</li>
                    <li className='px-3'> linkedin</li>
                    <li className='px-3'> contact</li>
                </div>
            </div>
    </nav>
  )
}

export default Header
