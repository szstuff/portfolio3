import React from 'react'
import { BiUnderline } from 'react-icons/bi';

const ScrollContainer = ({scrollContainerItems}) => {

    if (scrollContainerItems == undefined) {
        return <></>
    }

    const textItems = Object.keys(scrollContainerItems)
    .filter(key => key !== "media")
    .map(key => ({
      title: key, //the "section" (e.g. technologies, designedIn)
      content: scrollContainerItems[key] // The subsections (e.g. frontend, backend) with their children
    }));
  
    const renderSection = () => (
        //Render all custom bullet items 
        textItems ? (
            textItems.map((textItem, index) => (
                //Render each container (e.g. technologies, designedIn)
                <div key={index} className='flex-none w-fit max-h-full snap-start border-y-4 border-slate-200 pl-2 pr-2 overflow-y-scroll'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pt-4 pb-2'>{textItem.title}</h1>
                    <ul className='list-disc pl-4 mb-4'>
                        {Object.entries(textItem.content).map(([subItemTitle, subItemContent], subIndex) => (
                            //Render each first-level item/bullet title (e.g. frontend, backend)
                            <>
                                <h2 className='text-xl font-light w-full border-t-2 border-slate-400 '>{subItemTitle}</h2>
                                <ul className='list-disc pl-4 mb-4'>
                                    {subItemContent.map((content, index) => (
                                        //Render each child item under the title bullet (e.g. React, JS)
                                        <li key={index} className='text-xl font-extralight ml-2'>{content}</li>
                                    ))}
                                </ul>      
                            </>                      
                        ))}
                    </ul>
                </div>
            ))
        ) : (
            <></>
        )
    );
    

      const mediaItems = scrollContainerItems.media;
      
      const renderMedia = (mediaItems) => 
        //Check if there are any media items. If not, set to empty fragment 
        (mediaItems) ? (
        mediaItems.map((mediaItem, index) => {
            const title = mediaItem[0]
            const path = mediaItem[1]
            const extension = path.split(".").pop();  // Get file extension
            const aspectRatio = mediaItem[2]
            const altText = mediaItem[3]
                if (extension === "mp4") {
                    return(
                    <video controls key={index}
                        className={`${'h-full'} w-full object-contain snap-start
                        rounded-lg
                        `}>
                        <source src={`/src/assets/media/${path}`} type='video/mp4' />
                        Your browser does not support this video format.
                      </video>
                    )
                } else {
                  
                  //IMG title removed from landing page to work around incorrect div width issue in safari 
                      // {title && (
                      //   <p className='text-center font-thin text-xl h-[5%] mb-[2%] w-fit '> {title} </p>
                      // )}  

                  // Tailwind classes with title accomodation:
                      //  ${aspectRatio == "p" && (title ? 'h-[92%] w-auto' : 'h-[100%]')} // portrait
                      //  ${aspectRatio == "s" && (title ? 'max-w-[90%] h-auto max-h-[90%]' : 'max-w-[90%] h-auto max-h-[90%] my-[10%]')} // square
                      //  ${aspectRatio == "l" && (title ? 'w-[100%] h-auto max-h-[90%]' : 'w-[100%] h-auto max-h-[90%] my-[5%]')} // landscape
                      //  ${aspectRatio == undefined && (title ? 'max-h-[90%] max-w-[90%] w-auto h-auto' : 'max-h-[95%] max-w-[95%] w-auto h-auto my-[5%]')} // undefined
     
                      return(
                    <img src={`/src/assets/media/${path}`} alt={altText} 
                      className={` inline-block snap-start
                        //Set dimensions based on aspect ratio                 
                      ${aspectRatio == "p" && ('h-[100%] w-auto')} // portrait
                      ${aspectRatio == "s" && ('max-w-[90%] h-auto max-h-[90%] my-[10%]')} // square
                      ${aspectRatio == "l" && ('w-[100%] h-auto my-[10%]')} // landscape
                      ${aspectRatio == undefined && ('w-full h-auto my-[5%]')} // undefined
                      border-2 border-slate-500 rounded-lg mx-2 object-contain`} />
                      )
                  }
            }
        )
    ) : (
        <></>
    )
    // console.log("text items: " + textItems.length)
    // console.log("media items: " + mediaItems?.length)

  return (
    
    <div className='col-span-full flex max-h-[70vh] max-w-max overflow-x-scroll snap-x snap-proximity scroll-p-6 snap-normal p-4 space-x-6 horizontalscrollcontainer'>
      {renderSection()}
        <div className='flex flex-row w-fit max-h-full snap-start'>
          {renderMedia(mediaItems)}
        </div>
    </div>

  )
}

export default ScrollContainer
