import React from 'react'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import nine from '../assets/9.jpg'

function Latest() {
  return (
    <>
        <div className='flex flex-col items-center w-full px-12 max-sm:px-4 py-24 max-sm:py-8'>
            <div className=' flex flex-col items-center  w-1/2 max-sm:w-3/4'>
                <h1 className='text-6xl max-sm:text-2xl font-bold pb-4'>Latest Works</h1>
                <hr className='h-[5px] bg-yellow-400 w-32 max-sm:w-16'/>
                <p className='text-lg max-sm:text-sm pt-8 text-center text-slate-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde aliquid distinctio voluptate autem odit nihil ad omnis?
                </p>
            </div>

            <div className='w-1/2 pt-16 max-sm:pt-8 text-lg max-sm:text-sm cursor-pointer'>
                <ul className='flex flex-col sm:flex-row max-sm:items-center justify-between'>
                    <li className='text-[#fbd214] underline underline-offset-8 pt-2'>All </li>
                    <li className='pt-2 hover:text-[#fbd214] hover:underline hover:underline-offset-8'>Branding Goals</li>
                    <li className='pt-2 hover:text-[#fbd214] hover:underline hover:underline-offset-8'>Photography</li>
                    <li className='pt-2 hover:text-[#fbd214] hover:underline hover:underline-offset-8'>True Perfection</li>
                    <li className='pt-2 hover:text-[#fbd214] hover:underline hover:underline-offset-8'>Web Design</li>
                </ul>
            </div>

            <div className='h-[1080px]  w-full mt-16'>
                <div className='h-2/3 w-full flex max-sm:flex-col'>
                    <div className='w-1/2 max-sm:w-full h-full p-4'> <img src={two} className='object-cover h-full w-full'/> </div>
                    <div className='w-1/2 max-sm:w-full h-full'>
                        <div className='h-1/2  flex '>
                            <div className='w-1/2 h-full p-4'> <img src={one} className='object-cover h-full w-full'/>  </div>
                            <div className='w-1/2 h-full p-4'> <img src={five} className='object-cover h-full w-full'/>  </div>
                        </div>
                        <div className='h-1/2 flex'>
                            <div className='w-1/2 h-full p-4'> <img src={four} className='object-cover h-full w-full'/>  </div>
                            <div className='w-1/2 h-full p-4'> <img src={six} className='object-cover h-full w-full'/>  </div>
                        </div>
                    </div>
                </div>
                <div className='h-1/3 w-full flex max-sm:flex-col'>
                    <div className='w-1/2 max-sm:w-full h-full p-4 '> <img src={nine} className='object-cover h-full w-full'/>  </div>
                    <div className='w-1/2 max-sm:w-full h-full flex'>
                        <div className='w-1/2 h-full p-4'> <img src={three} className='object-cover h-full w-full'/>  </div>
                        <div className='w-1/2 h-full p-4'> <img src={seven} className='object-cover h-full w-full'/>  </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Latest