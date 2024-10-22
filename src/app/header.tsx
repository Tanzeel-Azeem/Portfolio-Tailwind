import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='ml-9 font-serif text-2xl font-medium'>
                <p>PortFolio <span  className='text-blue-400 text-4xl'>.</span></p>
            </div>
            <div>
                <nav>
                     <ul className='flex gap-x-7 list-none mr-9 mt-7 text-lg'>
                    <li ><Link className='text-white hover:text-blue-400  duration-500'  href='/'>Home</Link></li>
                    <li ><Link  className='text-white hover:text-blue-400  duration-500' href='./about'>About Us</Link></li>
                    <li  ><Link className='text-white hover:text-blue-400  duration-500' href='./contact'>Contact Us</Link></li>
                </ul>
                </nav>
               
            </div>
        </div>
      



    </div>
  )
}

export default Header