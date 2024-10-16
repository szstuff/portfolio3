import React from 'react'
import ScrollDownPrompt from './ScrollDownPrompt'
import {Button} from './Button'
import {portfolioitems} from '../assets/portfolioitems.json'

const LandingCard = React.forwardRef(({filters, setFilters}, ref) => {
  return (
    <div ref={ref} id={"0"}
      className={`snap-start  
      p-4 h-auto max-h-[70vh] max-w-[90%] md:max-w-[80%] mx-[5%] md:mx-[10%]
      px-2 
      grid grid-cols-1 md:grid-cols-5 gap-4
    `}>
      {/* Left col: highlighted projects  */}
         <div className='col-span-1 md:col-span-3 text-xl order-1 space-y-4 self-center'>
            <h3 className='sm:text-xl md:text-2xl lg:text-3xl text-slate-300 text-left'> What I'm working on now </h3>
            <div className='card grid grid-cols-2 rounded-lg gap-2 px-1 py-2 md:gap-4 md:px-8 mdpy-4'>
              <div className='col-span-2 flex justify-between items-center text-sm'>
                  <h3 className='font-semibold text-2xl'>{portfolioitems[3].title}</h3>
                  <Button link={portfolioitems[3].links.try_demo} text={"Try Demo"} type={"try_demo"}></Button>
              </div>
              <div className='col-span-2 flex flex-row gap-4 text-sm'>
                  <p className='flex-grow shrink text-left'>{portfolioitems[3].description}</p>
                  <Button type="read_more" link={portfolioitems[3].title} />
              </div>
            </div>

          </div>

          <div className='col-span-1 md:col-span-2 order-2 lg:mx-8 xl:mx-12 grow content-center'>
            <div className='grid grid-cols-2 mx-[2.5%]'>
              <Button link={"https://github.com/szstuff/"} width={"full"} text={"GitHub"} mt={"4"}/>
              <Button link={"https://www.linkedin.com/in/stilianz/"} width={"full"} text={"LinkedIn"} mt={"4"}/>
            </div>
            <Button link={"https://github.com/szstuff/portfolio3/"} type={"secondary"} width={"full"} text={"Fork this website!"} mt={"4"}/>
          </div>
             <ScrollDownPrompt/>
    </div>
  )
})
export default LandingCard


//   --primary: #D1E8E2;
//   --secondary: #19747E;
//   --accent: #A9D6EA;
//   --background: #E2E2E2;
//   --text: #19747E;