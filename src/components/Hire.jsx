import React from 'react'

function Hire() {
  return (
    <>
        <div className='flex flex-col items-center w-full py-32 max-sm:py-16 bg-yellow-400'>
            <div className=' flex flex-col items-center text-white'>
                <h1 className='text-6xl max-sm:text-xl font-bold pb-8 max-sm:pb-2'>Have Any Project In Mind?</h1>
                <hr className='h-[5px] bg-white w-32 max-sm:w-16'/>
                <button className='bg-white text-yellow-400 text-xl max-sm:text-sm py-4 max-sm:py-2 px-20 max-sm:px-8 mt-12'>Hire Me</button>
            </div>
        </div>
    </>
  )
}

export default Hire