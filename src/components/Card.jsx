import React, { useState } from 'react'
import { CardButton } from "./Button";


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

const Card = React.forwardRef(({ item }, ref) => {
  return (
    <div ref={ref} id={item.id}
      className={`snap-start shrink border-black border-2 rounded-lg
      bg-slate-100 shadow-xl p-4 max-h-[85vh] w-[96vw] mx-[2vw] md:w-[84vw] md:mx-[8vw] lg:w-[80vw] lg:mx-[10vw]
      flex flex-row justify-around
      mt-5
      card
    `}>

      <div className='flex flex-col gap-2 min-w-full'> 
        <div className='col-span-2 flex flex-wrap grid-cols-6 gap-2 p-0 md:p-4 items-center flex-grow' > 
          {item.logo && (
            <div> 
              <img src={`/src/assets/media/${item.logo}`} className=' w-auto max-h-[10vh] rounded-lg'/>
            </div>
          )}
          <div className=' shrink-0 w-auto'> 
            <h2 className='text-sm text-slate-500'> {item.date} </h2>  
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-balance'> {item.title} </h1> 
            <h2 className='text-xl text-slate-500 text-balance'> {item.description} </h2>  
          </div> 
        </div>
        <div className='col-span-full  p-0 md:p-4 text-sm sm:text-base md:text-xl lg:max-w-[70%] xl:max-w[60%] flex-grow' > <p> {item.body} </p> </div>
        {item.designed_in && item.designed_in.length > 0 && (
          <div className='col-span-fullp-4' >
            <h1 className='text-xl sm:text-2xl font-bold py-1 px-0 md:px-4'> Designed using </h1>
            <ul>
              {item.designed_in.map((value) => (
                <li key={value}>
                  <ul className='list-disc pl-4'>
                    <p> {value} </p>
                  </ul>
                </li>
              ))}
            </ul>   
          </div>
        )}

        <div className='col-span-full flex grow w-auto  max-h-[70vh]
        overflow-x-scroll snap-x snap-proximity scroll-p-6 snap-normal p-4 space-x-6
        horizontalscrollcontainer
        ' > 
        {item.tech && Object.keys(item.tech).length > 0 && (
            <div className='flex-none w-fit max-h-full snap-start
            border-y-4 border-slate-200 pl-2 overflow-y-scroll
            '>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pt-4 pb-6'> Technologies</h1>
              <ul>
                {Object.entries(item.tech).map(([techKey, techValues]) => (
                  <li key={techKey}>
                    <h2 className='text-xl font-light w-auto border-t-2 border-slate-400 '>{techKey}</h2>
                    <ul className='list-disc pl-4 mb-4'>
                      {techValues.map((techItem, index) => (
                        <li key={index} className='text-xl font-extralight'>{techItem}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
            {item.media && item.media.length > 0 && (
              item.media.map(([title, media, aspectRatio], index) => {
              const extension = media.split(".").pop();  // Get file extension
                if (extension === "mp4") {
                  return (
                    <div key={index} className={`flex-none w-fit
                    {title ? "h-[90%]" : "h-[100%]"} 
                    w-[90vw] lg:w-[80vw] snap-start`}>
                      {title && (
                        <p className='text-center font-thin text-xl h-[5%]'> {title} </p>
                      )}
                      <video controls 
                        className={`${title ? 'h-[90%] mt-[1%]' : 'h-full'} w-full object-contain
                        border-2 border-slate-500 rounded-lg
                        `}>
                        <source src={`/src/assets/media/${media}`} type='video/mp4' />
                        Your browser does not support this video format.
                      </video>
                    </div>
                  );
                } else {
                return (
                  <div key={index} className={`flex-none max-w-[80%] 
                  max-h-full snap-start`}>
                      {title && (
                        <p className='text-center font-thin text-xl h-[5%] mb-[5%] w-fit'> {title} </p>
                      )} 
                    <img src={`/src/assets/media/${media}`} alt={`Media for ${item.title}`} 
                      className={` inline-block
                        //Set dimensions based on aspect ratio and title (to accomodate title height) 
                        
                      ${aspectRatio == "p" && (title ? 'h-[92%] w-auto' : 'h-[100%]')} // portrait
                      ${aspectRatio == "s" && (title ? 'max-w-[90%] h-auto max-h-[90%]' : 'max-w-[90%] h-auto max-h-[90%] my-[10%]')} // square
                      ${aspectRatio == "l" && (title ? 'w-[100%] h-auto max-h-[90%]' : 'w-[100%] h-auto max-h-[90%] my-[5%]')} // square
                      ${aspectRatio == undefined && (title ? 'max-h-[90%] max-w-[90%] w-auto h-auto' : 'max-h-[95%] max-w-[95%] w-auto h-auto my-[5%]')} // square
                      border-2 border-slate-500 rounded-lg`} />
                  </div>
                );
              }
            }))
          }
        </div>

        <div className='col-span-full flex p-0 md:p-4 space-x-4 place-content-center text-sm sm:text-base md:text-xl'> 
          {item.links && Object.keys(item.links).map((linkKey, index) => (
            <CardButton key={item.id + linkKey} type={linkKey} link={(linkKey == "read_more") ? item.title : item.links[linkKey]}/>
             ))}
          </div>
      </div>

    </div>
  );
});


export default Card


