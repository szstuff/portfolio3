import React, { useEffect, useRef, useState } from 'react'
import {CardButton} from './Button'

const DetailCard = ({item}) => {
  const overviewContainer = useRef();
  const [overviewStuck, setOverviewStuck] = useState(false) // Track when overview container is sticky to apply style

  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current.scrollTop > 16) {
        setOverviewStuck(true)
      } 
      if (scrollRef.current.scrollTop < 16) {
        setOverviewStuck(false)
      }
    }

    const element = scrollRef.current;
    if (element) { // Ensure the element exists
      element.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [overviewStuck])

  return (
        <div ref={scrollRef} className='grid grid-cols-4 gap-4 overflow-y-scroll h-[calc(100lvh-60px)] w-[100vw] 
        bg-slate-100 
        '>
          {/* new overview */}
          <div ref={overviewContainer} className={`col-span-full flex flex-col gap-2 content-center mt-4 sticky top-0
          bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--primary)] rounded-lg 
         ${overviewStuck ? 'detailCardOverviewStuck' : 'detailCardOverview'} 
          `}> 
            <div className='col-span-2 flex flex-wrap grid-cols-6 gap-2 p-4 max-sm:place-content-center items-center flex-grow' > 
              {item.logo && (
                <div className='imgContainer'> 
                  <img src={`/src/assets/media/${item.logo}`} className=' w-auto max-h-[10vh] rounded-lg'/>
                </div>
              )}
              <div className=' shrink-0 w-auto'> <h1 className='text-4xl font-bold'> {item.title} </h1> 
              <h2 className='text-xl text-slate-500'> {item.description} </h2>  
              <h2 className='text-sm text-slate-500'> {item.date} </h2>  
              </div> 
            </div>
          </div>
              
          {/* Buttons */}
          <div className={`col-span-full flex flex-row gap-4 px-4 items-center mx-4 grow ${overviewStuck && 'mt-[150px]'}`}> 
            {item.links && Object.keys(item.links).map((linkKey, linkValue) => (
            ((linkKey != "read_more") && <CardButton key={item.id + linkKey} type={linkKey} link={linkValue} /> ) 
            ))} 
          </div>


           {/* Description */}
           <div className='col-span-4 md:col-span-2 p-4 items-center text-xl mx-8' >   
            <p> {item.body} </p>
          </div> 

          {/*  Technologies */}
          <div className='col-span-4 md:col-span-2 w-[90%] mx-8
          ' > 
            {item.tech && Object.keys(item.tech).length > 0 && (
                <div className='max-w-[80vw] lg:max-w-[70vw]
                pl-2
                '>
                  <h1 className='text-4xl font-semibold pt-4 pb-6'> Technologies</h1>
                  <ul>
                    {Object.entries(item.tech).map(([techKey, techValues]) => (
                      <li key={techKey}>
                        <h2 className='text-xl font-light border-t-2 border-slate-400 '>{techKey}</h2>
                        <ul className='list-disc pl-4 mb-4'>
                          {techValues.map((techItem, index) => (
                            <li key={index} className='text-xl font-extralight text-wrap'>{techItem}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
            )}
            {item.designed_in && item.designed_in.length > 0 && (
            <div className='col-span-full p-4' >
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
          </div>
          

          <hr className='col-span-full my-2'></hr>

          <div className='col-span-full mt-12 grid gap-6 space-y-4 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8'>
            {item.media && item.media.length > 0 && (
              item.media.map(([title, media, aspectRatio], index) => {
              const extension = media.split(".").pop();  // Get file extension
                if (extension === "mp4") {
                  return (
                    <div key={index} className={`flex-none w-fit
                    {title ? "w-[90%]" : "w-[100%]"} 
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
                  <div key={index} className={`
                        justify-center content-center
                        //Set col dimensions based on aspect ratio (to accomodate title height) 
                      ${aspectRatio == "p" && ('row-span-2 col-span-1')} // portrait
                      ${aspectRatio == "s" && ('row-span-1 col-span-1')} // portrait
                      ${aspectRatio == "l" && ('row-span-1 col-span-full')} // portrait

                  `}>
                      {title && (
                        <p className='text-center font-thin h-[5%] mb-[5%] w-fit md:text-xl lg:text-2xl'> {title} </p>
                      )} 
                    <img src={`/src/assets/media/${media}`} alt={`Media for ${item.title}`} 
                      className={`
                      {title == ? "h-[90%] py-[10%]" : "h-[100%]"} 
                      border-2 border-slate-500 rounded-lg`} />
                  </div>
                );
              }
            }))
            }
          </div>
        </div>
  )
}

export default DetailCard
