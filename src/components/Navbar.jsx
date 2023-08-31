import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold'>KAPE-AN</h1>
        <ul className='hidden md:flex'>
            <li className='p-8 w-[150px]'>Home</li>
            <li className='p-8 w-[150px]'>About Us</li>
            <li className='p-8 w-[150px]'>Products</li>
            <li className='p-8 w-[150px]'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-white-800 ease-out duration-500 bg-[#000300]' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold m-8'>KAPE-AN</h1>
            <ul className='uppercase p-2'>
                <li className='p-8 border-b border-white-800'>Home</li>
                <li className='p-8 border-b border-white-800'>About Us</li>
                <li className='p-8 border-b border-white-800'>Products</li>
                <li className='p-8 border-b border-white-800'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar