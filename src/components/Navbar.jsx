import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleNavItemClick = () => {
        // Close the sidebar by updating the 'nav' state
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white z-1 sticky'>
        <h1 className='w-full text-3xl font-bold'><Link to="kape-an" spy={true} smooth={true} offset={-40} duration={500}>KAPE-AN</Link></h1>
        <ul className='hidden md:flex p-2'>
            <li className='w-[150px] cursor-pointer'>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            </li>
            <li className='w-[150px] cursor-pointer'>
                <Link to="about" spy={true} smooth={true} offset={-150} duration={500}>About Us</Link>
            </li>
            <li className='w-[150px] cursor-pointer'>
                <Link to="products" spy={true} smooth={true} offset={-90} duration={500}>Products</Link>
            </li>
            <li className='w-[150px] cursor-pointer'>
                <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[35%] h-full border-r border-r-white-800 ease-out duration-500 bg-[#000300]' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold m-8'><Link to="kape-an" spy={true} smooth={true} offset={-40} duration={500}>KAPE-AN</Link></h1>
            <ul className='uppercase p-2'>
                <li className='p-6 border-b border-white-800'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleNavItemClick}>Home</Link>
                </li>
                <li className='p-6 border-b border-white-800'>
                    <Link to="about" spy={true} smooth={true} offset={-250} duration={500} onClick={handleNavItemClick}>About Us</Link>
                </li>
                <li className='p-6 border-b border-white-800'>
                    <Link to="products" spy={true} smooth={true} offset={-90} duration={500} onClick={handleNavItemClick}>Products</Link>
                </li>
                <li className='p-6 border-b border-white-800'>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleNavItemClick}>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar