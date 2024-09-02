import React from 'react'
import appstoreIcon from '../assets/media/appstorebtn.svg'; 
import { Link } from 'react-router-dom';

export const CardButton = ({type, link, text, mt, mb, ml, mr, width}) => {
      if (type == 'app_store') { 
              return (
                <a href={link} target='_blank'>
                  <div className={` ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                    <img src={appstoreIcon} className='w-full'/> 
                  </div>
                </a>
              )
            } else if (type == 'try_demo') {
              return (
                <a href={link} target='_blank' className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-red-500 hover:bg-red-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%] text-center`}>
                  <button >
                    Try Development Build
                  </button>
                </a>
              )
            } else if (type == 'try_prod') {
              return (
                <a href={link} className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-red-500 hover:bg-red-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%] text-center`}>
                  <button>
                    Try
                  </button>
                </a>
              )
            } else if (type == 'read_more') {
              return (
                <Link to={`/project/${link}`} className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%] text-center`}>
                  <button>
                    Read More
                  </button>
                </Link>
              )
            }
             
            else {
              return (
              <a href={link} target='_blank' className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-lg grow lg:max-w-[33%] text-center`}>
                <button >
                  {type}
                </button>
                </a>
              )
            }
          }

export const Button = ({type, link, text, mt, mb, ml, mr, width}) => {
      if (type == 'app_store') { 
              return (
                <a href={link} target='_blank'>
                  <div className={`bg-red-500 ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                    <img src={appstoreIcon} className='w-full'/> 
                  </div>
                </a>
              )
            } else if (type == 'try_demo') {
              return (
                <a href={link} target='_blank'>
                  <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                    Try Development Build
                  </button>
              </a>
              )
            } else if (type == 'try_prod') {
              return (
                <a href={link} target='_blank'>
                <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shrink  ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                  Try
                </button>
              </a>
              )
            } else if (type == 'read_more') {
              return (
                <Link to={`/project/${link}`}>
                  <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shrink  ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                    Read More
                  </button>
                </Link>
              )
            }
            else if (type == 'disabled') {
                return (
                  <button disabled className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-slate-500 text-white font-bold py-2 px-4 rounded-lg ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                    {text}
                  </button>
                )
            }            else {
              return (
                <a href={link} target='_blank'>
                <button className={`mt-${mt} mb-${mb} ml-${ml} mr-${mr} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${width == 'full' && 'w-[90%] mx-[10%]'}`}>
                  {type}
                </button>
              </a>
              )
            }
          }

