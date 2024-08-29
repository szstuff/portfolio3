import React, { useState } from 'react'

const Card = React.forwardRef(({id, title, body, isCovered}, ref) => {
  return (
    <div ref={ref} id={id} 
    className={`snap-start shrink-0
    border-black border-2 rounded-lg
    sticky ${positionValues[id]}
    bg-slate-100 shadow-xl 
    mt-4 p-4 h-[80vh] w-[80vw] mx-[9vw]
    card
    // ${isCovered ? 'card-covered' : 'card'}
    `}>
      <h1>{id}:{title} </h1>
      <p>{body} </p>
    </div>
  )
}
)

//TODO:
//Kan sikkert gjøres programatically, men tailwind likte ikke template literals (feks top-[${id}])

const positionValues = [
  "z-[0] top-[3vh] mt-[1vh]",
  "z-[1] top-[4vh] mt-[2vh]",
  "z-[2] top-[5vh] mt-[3vh]",
  "z-[3] top-[6vh] mt-[4vh]",
  "z-[4] top-[7vh] mt-[5vh]",
  "z-[5] top-[8vh] mt-[6vh]",
  "z-[6] top-[9vh] mt-[7vh]",
  "z-[7] top-[10vh] mt-[8vh]",
  "z-[8] top-[11vh] mt-[9vh]",
  "z-[9] top-[12vh] mt-[10vh]",
  "z-[10] top-[13vh] mt-[11vh]",
  "z-[11] top-[14vh] mt-[12vh]",
  "z-[12] top-[15vh] mt-[13vh]",
  "z-[13] top-[16vh] mt-[14vh]",
  "z-[14] top-[17vh] mt-[15vh]",
  "z-[15] top-[18vh] mt-[16vh]",
  "z-[16] top-[19vh] mt-[17vh]",
  "z-[17] top-[20vh] mt-[18vh]",
  "z-[18] top-[21vh] mt-[19vh]",
  "z-[19] top-[22vh] mt-[20vh]",
  "z-[20] top-[23vh] mt-[21vh]",
  "z-[21] top-[24vh] mt-[22vh]",
  "z-[22] top-[25vh] mt-[23vh]",
  "z-[23] top-[26vh] mt-[24vh]",
  "z-[24] top-[27vh] mt-[25vh]",
  "z-[25] top-[28vh] mt-[26vh]",
  "z-[26] top-[29vh] mt-[27vh]",
  "z-[27] top-[30vh] mt-[28vh]",
  "z-[28] top-[31vh] mt-[29vh]",
  "z-[29] top-[32vh] mt-[30vh]",
  "z-[30] top-[33vh] mt-[31vh]",
]

export default Card

