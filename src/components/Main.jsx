import React, { useEffect, useRef, useState, useContext } from 'react';
import Card from './Card';
import { UserContext } from '../App';
import { ScrollContext } from '../App';

// Tech object: 
// int id, string title, (short)description, body, [string:string[]] tech, [string:string] links, string[] media  
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
        body: "ZLab is a concept webapp designed for a 3D-print on-demand service. The USP of the application is it's automatic quote calculator that accurately determines the quantity of material required for a model.",
        tech: {
            "Backend": [".Net 8"],
            "Frontend": ["MVVM", "Razor Views", "Bootstrap", "Three.JS"],
            "": ["Self-hosted", "SQLite", "ASP.NET Identity", "Email Sender with Brevo", "Localization", "Custom bash-scripts slice and parse g-code"]
        }, 
        links: {
            "try_demo": "https://zlab.no"
        },
        media: [
            ["price calculation page", "zlab_demo_1.jpg"],
            ["", "vr_trash_demo_1.mov"],
            ["", "zlab_demo_1.jpg"],
            ["", "zlab_demo_1.jpg"],
            ["", "zlab_demo_1.jpg"],
            ["", "zlab_demo_1.jpg"],
        ]
    },
    {id: 1, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        body: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: "pasty_logo_1.jpeg",
        media: {
            "" : "pasty_1.jpeg",
        }
    },
    {id: 2, title: "EPS VR Demo",  description: "Designed for generic HMDs",
        body: "The application allows the user to look around a simulation of one of my prototypes collecting floating trash in the ocean. It runs on Unity using a custom camera rig controller that addresses the shortcomings of the headset used - including IPD adjustment in software and gyroscope-based tracking (as opposed to true spatial tracking).",
        tech: {
            "Backend": ["Unity3D"],
            "Backend2": ["Unity3D","Unity3D","Unity3D","Unity3D","Unity3D", "Unity3D"],
            "Backend3": ["Unity3D"],
            "Backend4": ["Unity3D"],
            "Others": ["SwiftData"]
            //TODO: add design tools
        },
        media: {
            "" : "vr_trash_demo_1.mov",
        }
    },
    {id: 3, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        body: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
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
        
    },
    {id: 4, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        body: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"]
    },
    {id: 5, title: "Pasty keyboard", description: "iOS/iPadOS keyboard",
        body: "iOS and iPadOS app developed in Swift using frameworks like SwiftUI, UIKit and SwiftData. Pasty allows the user to quickly paste pre-defined snippets of text in any text field",
        tech: {
            "Backend": ["Swift", "UIKit"],
            "Frontend": ["SwiftUI"],
            "Others": ["SwiftData"]
        }, 
        links: {
            "app_store": "https://apps.apple.com/app/pasty-keyboard/id6499453192",
            "read_more": "https://stilian.dev/Pasty/"
        },
        logo: ["pasty_logo_1.jpeg"]
    },
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
        setCurrentCardId(elementsInView[elementsInView.length-1])  
        console.log("Elements currently in view:", elementsInView);
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
            <div ref={scrollRef} className='bg-blue-100 h-[calc(100vh-30px)] snap-y snap-mandatory scroll-p-4 overflow-y-scroll relative'>
                <div className='container'>
                    <div className='relative'>
                        {arr.map((item, index) => (
                            <Card 
                                ref={(el) => elementsRef.current[index] = el}  
                                key={""+item.id} 
                                item={item}
                                isCovered={currentCardId > item.id}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
};

export default Main;