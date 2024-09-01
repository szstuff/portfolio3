import React from 'react'
import ScrollDownPrompt from './ScrollDownPrompt'
import Button from './Button'
import { FaDotCircle } from 'react-icons/fa'
import { FiArrowDownCircle } from 'react-icons/fi'

const LandingCard = React.forwardRef(({item}, ref) => {
  return (
    <div ref={ref} id={"0"}
      className={`snap-start shrink-0 
      p-4 h-[60vh] w-[100vw]
      flex flex-row justify-around
    `}>
        <div className='flex flex-col gap-2 min-w-full'> 
            <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 space-x-4 '> 
                <div className='col-span-2 text-xl border-2 border-orange-50 order-2 max-h-[35vh] overflow-y-scroll lg:order-1 '>
                    <p className='flex gap-4 items-center bg-red-500 pl-2'> <FaDotCircle/> under development </p>
                    <p className=' border-l-8 border-black ml-4 pl-4 text-[color:var(--primary)]'> 1/09: Finished general layout and design of project cards. </p>
                    <p className=' border-l-8 border-black ml-4 pl-4 text-[color:var(--primary)]'> Implemented basic/initial landing page 'card'  </p>
                    <p className=' border-l-8 border-black ml-4 pl-4 text-[color:var(--primary)]'> Launched first public version </p>
                    {/* <p className='flex gap-4 items-center bg-red-200 pl-2'> <FaDotCircle/> changelog </p> */}
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> 1/09: launched first public version </p>
                    <p className='flex gap-4 items-center bg-red-200 pl-2'> <FiArrowDownCircle/> coming updates </p>
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> Implement general landing page layout and design </p>
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> Filter cards based on technologies or field (e.g. React, Unity, design) </p>
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> Refactor and optimise logic before uploading repo to Github   </p>
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> Correct Safari image rendering issue (parent div width doesn't scale down to fit media width) </p>
                    <p className=' border-l-8 border-black ml-4 pb-2 pl-4 text-[color:var(--primary)]'> Accessibility (incl. logic for setting media description programatically) </p>


                </div>
                <div className='col-span-4 lg:col-span-2 text-xl order-1 mb-8 px-8 lg:px-2'>
                    <p className='text-[color:var(--primary)]'> Hi! This is an early version of my redesigned portfolio website - created with React, Vite and Tailwind! 
                        <br/> <br/>
                        A lot of my information is missing as I'm still experimenting with different designs and ways of structuring and presenting the data. I am hosting this early development build to show my progress so far.</p>
                </div>
                <div className=' grid-flow-row col-span-2 space-y-4 border-orange-50 border-l-2 order-3 mx-4 px-4'>
                    <Button mt="4" link={""} type={"wide"} text={"Github"}/>
                    <Button link={""} type={"wide"} text={"LinkedIn"}/>

                    <p className='pt-8 text-[color:var(--primary)]'> This website is still under development. See my old portfolio for all my projects. </p>
                    <Button link={""} type={"wide"} text={"Full portfolio"}/>

                    <p className='pt-8 text-[color:var(--primary)]'> This website is developed using React, Vite and Tailwind. </p>
                    <Button link={""} type={"disabledwide"} text={"Github repo"}/>
                    
                </div>
            </div>
             <ScrollDownPrompt/>
        </div>
    </div>
  )
})
export default LandingCard


//   --primary: #D1E8E2;
//   --secondary: #19747E;
//   --accent: #A9D6EA;
//   --background: #E2E2E2;
//   --text: #19747E;