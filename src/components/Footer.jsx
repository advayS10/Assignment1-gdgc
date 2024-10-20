import React from 'react'
import Logo from '../assets/11.png'
import fb from '../assets/fb.svg'
import github from '../assets/github.svg'
import google from '../assets/google.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'


function Footer() {
  return (
    <>
        <div className='flex justify-center w-full pt-16 max-sm:pt-8'>
            <div className='w-1/2 max-sm:w-full max-sm:mx-4 flex flex-col items-center'>
                <div className='w-16'>
                    <img src={Logo} alt="" />
                </div>
                <div className='pt-16 max-sm:pt-8'>
                    <p className='text-xl max-sm:text-sm text-center text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere commodi quo quia unde!</p>
                </div>

                <div className='w-1/2 max-sm:w-full max-sm:px-4'>
                    <div className='pt-16 max-sm:pt-8 flex justify-between'>
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full'>
                            <div className='py-[16px] px-[20px]'>
                                <img src={fb} alt="" className='w-[14px] '/>
                            </div>
                        </div>
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full'>
                            <div className='py-[16px] px-[16px]'>
                                <img src={github} alt="" className='w-[20px] '/>
                            </div>
                        </div>
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full'>
                            <div className='py-[18px] px-[16px]'>
                                <img src={google} alt="" className='w-[20px] '/>
                            </div>
                        </div>
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full'>
                            <div className='py-[15px] px-[16px]'>
                                <img src={insta} alt="" className='w-[20px] '/>
                            </div>
                        </div>
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full'>
                            <div className='py-[15px] px-[16px]'>
                                <img src={linkedin} alt="" className='w-[20px] '/>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='pt-16 max-sm:pt-8 pb-8'>
                    <h1 className='text-lg max-sm:text-sm text-slate-400'>Copyright &copy; 2024</h1>
                </div>

            </div>

            
        </div>
    </>
  )
}

export default Footer