import React, { useEffect, useRef, useState, useContext } from 'react';
import Card from './Card';
import { UserContext } from '../App';
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
    // {id: 1, title: "Oppgave 123", body: "tasdasdasd"},
    // {id: 2, title: "Website for dadada", body: "tasdasdasd"},
    // {id: 3, title: "CLI Utility 1", body: "tasdasdasd"},
    // {id: 4, title: "CLI Utility 2", body: "tasdasdasd"},
    // {id: 5, title: "hei", body: "tasdasdasd"},
    // {id: 6, title: "hei", body: "tasdasdasd"},
    // {id: 7, title: "hei", body: "tasdasdasd"},
    // {id: 8, title: "hei", body: "tasdasdasd"},
    // {id: 9, title: "hei", body: "tasdasdasd"},
    // {id: 10, title: "hei", body: "tasdasdasd"},
    // {id: 11, title: "hei", body: "tasdasdasd"},
    // {id: 12, title: "hei", body: "tasdasdasd"},
    // {id: 13, title: "hei", body: "tasdasdasd"},
    // {id: 14, title: "hei", body: "tasdasdasd"},
    // {id: 15, title: "hei", body: "tasdasdasd"},
    // {id: 16, title: "hei", body: "tasdasdasd"},
    // {id: 17, title: "hei", body: "tasdasdasd"},
    // {id: 18, title: "hei", body: "tasdasdasd"},
    // {id: 19, title: "hei", body: "tasdasdasd"},
    // {id: 20, title: "hei", body: "tasdasdasd"}
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
        <div ref={scrollRef} className='bg-blue-100 h-[calc(100vh-30px)] snap-y snap-mandatory scroll-p-4 overflow-y-scroll'>
            <div className='container p-4'>
                <div className='grid gap-4'>
                    <div className='relative'>
                        {arr.map((item, index) => (
                            <Card 
                                ref={(el) => elementsRef.current[index] = el}  // Assign ref to each element
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                body={item.body}
                                isCovered={currentCardId > item.id ? true : false}  
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;