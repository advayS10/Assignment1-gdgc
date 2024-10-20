import React from 'react'
import Logo from '../assets/11.png'
import Menu from '../assets/menu-line.svg'

function Header() {

  return (
    <>
        <div className='flex justify-between items-center h-28 px-16 max-sm:px-4' style={{ 'backgroundColor': 'rgb(251 251 251)'}}>
            <div>
                <img className='w-16 max-sm:w-12' src={Logo} alt="" />
            </div>
            <div className='max-sm:hidden lg:text-lg'>
                <ul className='flex cursor-pointer'>
                    <li className='hover:text-yellow-400'>Home</li>
                    <li className='md:ml-6 lg:ml-12 hover:text-yellow-400'>About Us</li>
                    <li className='md:ml-6 lg:ml-12 hover:text-yellow-400'>Services</li>
                    <li className='md:ml-6 lg:ml-12 hover:text-yellow-400'>Portfolio</li>
                    <li className='md:ml-6 lg:ml-12 hover:text-yellow-400'>Contact</li>
                    <li className='md:ml-6 lg:ml-12 hover:text-yellow-400'>Blog</li>
                </ul>
            </div>

            <div className='sm:hidden'>
                <img src={Menu} className='w-8' />
            </div>

        </div>
    </>
  )
}

export default Header