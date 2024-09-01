import React from 'react'
import appstoreIcon from '../assets/media/appstorebtn.svg'; 

const Button = ({type, link, text, mt, mb, ml, mr}) => {
      if (type == 'app_store') { 
              return (
                  <button className="">
                    <img src={appstoreIcon}/> 
                  </button>    
              )
            } else if (type == 'try_demo') {
              return (
                  <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-red-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]`}>
                    try demo
                  </button>
              )
            } else if (type == 'try_prod') {
              return (
                <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]`}>
                  try prod
                </button>
              )
            } else if (type == 'read_more') {
              return (
                <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]`}>
                  read more
                </button>
              )
            }
            else if (type == 'wide') {
                return (
                  <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg w-full`}>
                    {text}
                  </button>
                )
            }    
            else if (type == 'disabledwide') {
                return (
                  <button disabled className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-slate-500 text-white font-bold py-2  rounded-lg w-full`}>
                    {text}
                  </button>
                )
            }            else {
              return (
                <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%]`}>
                  {type}
                </button>
              )
            }
          }


export default Button
