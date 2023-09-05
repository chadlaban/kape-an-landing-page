import React from 'react';
import Typed from 'react-typed';
import CityView from '../imgs/upper-content-bg.png';
import DrinkCoffee from '../imgs/drink-your-coffee.png'
import FacebookIcon from '../imgs/fb-icon.png';
import InstagramIcon from '../imgs/ig-icon.png';
import TwitterIcon from '../imgs/tt-icon.png';

const UpperContent = () => {
  return (
    <div className='text-white'>
        <div className='bg-black h-[600px] w-full bg-cover bg-center relative z-[-1]'>
            <div className='text-center justify-center'>
                <img src={CityView} className='w-full h-full object-cover absolute' alt='upper-content-bg'/>
                <div className='absolute inset-0 flex items-center justify-center'>
                        <Typed 
                            className='md:text-10xl sm:text-8xl text-6xl font-semibold'
                            strings={['KAPE-AN', '커피', 'KAHVI', 'Кофе', 'قهوة', 'コーヒー', 'ΚΑΦΕΣ', 
                            'KAwhe', 'קפה', 'ਕਾਫੀ', 'काफी', 'CAFFÈ', 'ကော်ဖီ', 'KÁVA', '咖啡']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                </div>
            </div>
        </div>

        <div className='w-full py-6 px-4-border-b border-black-600 '>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4'>
            <img className='mx-auto p-6' src={DrinkCoffee} alt='drink-your-coffee'/>
            <div className='mx-auto grid md:grid-cols-2'>
              <p className='md:text-10xl sm:text-8xl text-6xl font-semibold my-auto p-8 border-b border-white border-l'>
                Baguio in your cup of coffee.
              </p>
              <div className='my-auto mx-auto flex flex-row md:flex-col p-4'>
                <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={FacebookIcon} alt='facebook-icon' />
                <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={InstagramIcon} alt='instagram-icon' />
                <img className='p-4 transition duration-300 ease-in-out transform hover:scale-110' src={TwitterIcon} alt='twitter-icon' />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpperContent