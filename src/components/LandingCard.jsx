import React from 'react'
import ScrollDownPrompt from './ScrollDownPrompt'
import {Button} from './Button'

const LandingCard = React.forwardRef(({filters, setFilters}, ref) => {
  return (
    <div ref={ref} id={"0"}
      className={`snap-start  
      p-4 h-auto max-h-[70vh] w-full
      justify-around
      px-2 md:px-8 lg:px-16
      grid grid-cols-1 md:grid-cols-5 place-content-center gap-4 text-center
    `}>
          <div className='col-span-1 md:col-span-3 text-xl order-1 lg:px-2'>
              <p className='text-[color:var(--primary)]'> Hi! This is an early version of my redesigned portfolio website - created with React, Vite and Tailwind! 
                  <br/> <br/>
                  A lot of my information is missing as I'm still experimenting with different designs and ways of structuring and presenting the data. I am hosting this early development build to show my progress.</p>
          </div>
          <div className='col-span-1 md:col-span-2 order-2 '>
            <p className='pt-8 text-[color:var(--primary)]'> This website is still under development. See my old portfolio for all my projects. </p>
            <Button link={"https://www.stilian.dev"} type={"Full Portfolio"} width={"full"} text={"Full Portfolio"} mt={"4"}/>
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