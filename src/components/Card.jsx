import React from 'react'

const Card = React.forwardRef(({id, title, body}, ref) => {
  return (
    <div ref={ref} id={id} 
    className={`scroll-mt-12 snap-start shrink-0
    border-black border-2 rounded-lg  
    sticky ${positionValues[id]}
    bg-slate-100 shadow-xl 
    my-6 p-4`}>
      <h1>{id}:{title} </h1>
      <p>{body} </p>
    </div>
  )
}
)

const positionValues = [
  "w-[82vw] h-[80vh] z-[0] top-[4vh]",
  "w-[82vw] h-[80vh] z-[0] top-[5vh]",
  "w-[82vw] h-[80vh] z-[0] top-[6vh]",
  "w-[82vw] h-[80vh] z-[0] top-[7vh]",
]

export default Card

