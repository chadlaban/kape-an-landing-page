import React from 'react';
import Typed from 'react-typed';

const UpperContent = () => {
  return (
    <div className='text-white'>
        <div className='bg-black h-[600px] w-full bg-cover bg-center relative z-[-1]'>
            <div className='text-center justify-center'>
                <img src='./imgs/upper-content-bg.png' className='w-full h-full object-cover absolute' alt='upper-content-bg'/>
                <div className='absolute inset-0 flex items-center justify-center'>
                        <Typed 
                            className='text-white md:text-10xl sm:text-8xl text-6xl font-semibold'
                            strings={['KAPE-AN', '커피', 'KAHVI', 'Кофе', 'قهوة', 'コーヒー', 'ΚΑΦΕΣ', 
                            'KAwhe', 'קפה', 'ਕਾਫੀ', 'काफी', 'CAFFÈ', 'ကော်ဖီ', 'KÁVA', '咖啡']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpperContent