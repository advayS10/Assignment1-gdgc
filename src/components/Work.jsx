import React from 'react'

function Work() {
  return (
    <>
        <div className='flex flex-col items-center w-full bg-[#fbfbfb] px-12 max-sm:px-4 py-28 max-sm:pt-8'>
            <div className=' flex flex-col items-center w-3/5'>
                <h1 className='text-6xl max-sm:text-2xl font-bold pb-8 max-sm:pb-4'>Work Experiences</h1>
                <hr className='h-[5px] bg-yellow-400 w-32 max-sm:w-16'/>
                <p className='text-lg max-sm:text-sm pt-8 text-center text-slate-400'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eaque dolores ea nulla rerum quisquam doloremque ipsa voluptates.
                </p>
            </div>

            <div className='pt-28 max-sm:pt-8 max-sm:mx-8'>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 border bg-white'>
                    <div className='flex flex-col border text-slate-400'>
                        <div className='py-20 max-sm:py-12 px-12 max-sm:px-8'>
                            <div>
                                <h2 className='text-lg max-sm:text-sm   '>JUNE 2012 - 16</h2>
                                <h1 className='text-2xl max-sm:text-xl font-bold text-slate-950'>UI/UX Designer</h1>
                                <h2 className='text-lg max-sm:text-sm '>Adobe inc.</h2>
                            </div>
                            
                            <div className='pt-4 text-lg max-sm:text-sm'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ex fugiat quo vero ad in?</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col border text-slate-400'>
                        <div className='py-20 max-sm:py-12 px-12 max-sm:px-8'>
                            <div>
                                <h2 className='text-lg max-sm:text-sm '>JUNE 2012-16</h2>
                                <h1 className='text-2xl max-sm:text-xl font-bold text-slate-950' >Product Designer</h1>
                                <h2 className='text-lg max-sm:text-sm '>Adobe inc.</h2>
                            </div>
                            
                            <div className='pt-4 text-lg max-sm:text-sm '>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ex fugiat quo vero ad in?</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col border text-slate-400'>
                        <div className='py-20 max-sm:py-12 px-12 max-sm:px-8 '>
                            <div >
                                <h2 className='text-lg max-sm:text-sm '>JUNE 2012-16</h2>
                                <h1 className='text-2xl max-sm:text-xl font-bold text-slate-950'>Graphics Designer</h1>
                                <h2 className='text-lg max-sm:text-sm '>Adobe inc.</h2>
                            </div>
                            
                            <div className='pt-4 text-lg max-sm:text-sm '>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ex fugiat quo vero ad in?</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

        </div>
    </>
  )
}

export default Work