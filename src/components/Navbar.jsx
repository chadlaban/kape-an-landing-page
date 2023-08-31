import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold'>KAPE-AN</h1>
        <ul className='flex'>
            <li className='p-8 w-[150px]'>Home</li>
            <li className='p-8 w-[150px]'>About Us</li>
            <li className='p-8 w-[150px]'>Products</li>
            <li className='p-8 w-[150px]'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar