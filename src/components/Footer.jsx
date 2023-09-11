import React from 'react';
import {Link} from 'react-scroll';
import FacebookIcon from '../imgs/fb-icon.png';
import InstagramIcon from '../imgs/ig-icon.png';
import TwitterIcon from '../imgs/tt-icon.png';
import AddressIcon from '../imgs/house-solid.svg';
import PhoneIcon from '../imgs/phone-solid.svg';
import MailIcon from '../imgs/envelope-solid.svg';

const Footer = () => {
  return (
    <div className='bg-[#241811] text-white mx-auto grid md:grid-cols-2 py-14' id='contact'>
        <div className='flex flex-col text-center'>
          <p className='md:text-8xl sm:text-6xl text-5xl font-semibold my-auto uppercase flex flex-row md:flex-col text-center justify-center'>
              KAPE-AN 
          </p>
          <div className='space-x-4 pt-2 m-2'>
            <span className='w-[150px] cursor-pointer'><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></span><span>|</span>
            <span className='w-[150px] cursor-pointer'><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></span><span>|</span>
            <span className='w-[150px] cursor-pointer'><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Products</Link></span><span>|</span>
            <span className='w-[150px] cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></span>
          </div>
          <div className='mx-auto flex flex-row p-4'>
            <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={FacebookIcon} alt='facebook-icon' />
            <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={InstagramIcon} alt='instagram-icon' />
            <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={TwitterIcon} alt='twitter-icon' />
          </div>
        </div>
        <div className='my-auto grid md:grid-cols-2 space-y-6 md:space-y-0'>
          <div className='mx-auto'>
            <h6 className='text-xl text-center md:text-left'>Contact Us</h6>
            <div className='mx-auto text-sm font-thin mt-4 space-y-3'>
              <div className='flex items-center mr-4'>
                <img className='mr-2 w-4 md:w-5' src={AddressIcon} alt='business-address' />
                <span>#0000 Proin sollicitudin risus vel, justo auctor 01 Posuere.</span>
              </div>
              <div className='flex items-center mr-4'>
                <img className='mr-2 w-4 md:w-5' src={PhoneIcon} alt='business-address' />
                <span>(123) 012-3456-78</span>
              </div>
              <div className='flex items-center mr-4'>
                <img className='mr-2 w-4 md:w-5' src={MailIcon} alt='business-address' />
                <span>kape-an@email.com</span>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <h6 className='text-xl'>Services</h6>
            <ul className='text-sm space-y-3 mt-4 font-thin'>
              <li>Custom Flavors</li>
              <li>Delivery</li>
              <li>Supplier</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer