import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";


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
  const [galleryTitle, setGalleryTitle] = useState()
  console.log(item)
  return (
    <div ref={ref} id={item.id}
      className={`snap-start shrink-0 border-black border-2 rounded-lg
      bg-slate-100 shadow-xl p-4 h-[90vh] w-[96vw] mx-[2vw] md:w-[84vw] md:mx-[8vw] lg:w-[80vw] lg:mx-[10vw]
      flex flex-row justify-around
      mt-10 order-1  
      card
    `}>

      <div className='flex flex-col gap-2 min-w-full'> 
        <div className='col-span-2 flex flex-wrap grid-cols-6 gap-2 p-4 items-center flex-grow' > 
          {item.logo && (
            <div> 
              <img src={`/src/assets/media/${item.logo}`} className=' w-auto max-h-[10vh] rounded-lg'/>
            </div>
          )}
          <div className=' shrink-0 w-auto'> <h1 className='text-4xl font-bold'> {item.title} </h1> 
          <h2 className='text-xl text-slate-500'> {item.description} </h2>  
          </div> 
        </div>
        <div className='col-span-full  p-4 text-xl lg:max-w-[70%] xl:max-w[60%] flex-grow' > <p> {item.body} </p> </div>
        {item.designed_in && item.designed_in.length > 0 && (
          <div className='col-span-fullp-4' >
            <h1 className='text-2xl font-bold py-2'> Designed using </h1>
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

        <div className='col-span-full flex grow w-[100%] max-h-[70%]
        overflow-x-scroll snap-x snap-proximity scroll-p-6 snap-normal p-4 space-x-6
        ' > 
        {item.tech && Object.keys(item.tech).length > 0 && (
            <div className='flex-none max-w-[80vw] lg:max-w-[70vw] max-h-full snap-start
            border-y-4 border-slate-200 pl-2 overflow-y-scroll
            '>
              <h1 className='text-4xl font-semibold pt-4 pb-6'> Technologies</h1>
              <ul>
                {Object.entries(item.tech).map(([techKey, techValues]) => (
                  <li key={techKey}>
                    <h2 className='text-xl font-light w-[50%] border-t-2 border-slate-400 '>{techKey}</h2>
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
                    {title ? "max-w-[70vw]" : "max-w-[80vw]"} 
                    max-h-full snap-start`}>
                      {title && (
                        <p className='text-center font-thin text-xl h-[5%]'> {title} </p>
                      )}
                      <video controls 
                        className={`${title ? 'h-[95%]' : 'h-full'} w-full object-contain`}>
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
                        <p className='text-center font-thin text-xl h-[5%] mb-[5%] w-fit'> {title + ":" + aspectRatio} </p>
                      )} 
                    <img src={`/src/assets/media/${media}`} alt={`Media for ${item.title}`} 
                      className={` 
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

        <div className='col-span-full flex p-4 gap-2 space-x-4 place-content-center' > 
          {item.links && Object.keys(item.links).map((linkKey, linkValue) => {
            console.log(linkKey)
            if (linkKey == 'app_store') { 
              return (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-lg grow lg:max-w-[33%]">
                    AppStore 
                  </button> 
              )
            } else if (linkKey == 'try_demo') {
              return (
                  <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]">
                    try demo
                  </button>
              )
            } else if (linkKey == 'try_prod') {
              return (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]">
                  try prod
                </button>
              )
            } else if (linkKey == 'read_more') {
              return (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]">
                  read more
                </button>
              )
            } else {
              return (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]">
                  Other
                </button>
              )
            }
          })}
        
        </div>
      </div>

    </div>
  );
});


export default Card


