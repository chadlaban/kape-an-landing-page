import React from 'react';
import ProductOne from '../imgs/products/product_1.png';
import ProductTwo from '../imgs/products/product_2.png';
import ProductThree from '../imgs/products/product_3.png';
import ProductFour from '../imgs/products/product_4.png';
import ProductFive from '../imgs/products/product_5.png';
import ProductSix from '../imgs/products/product_6.png';

const Products = () => {
  return (
    <div className='text-white'>
        <h1 className='md:text-8xl sm:text-6xl text-5xl font-semibold text-center'>KAPE</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 py-16 text-center'>
            <div className='flex justify-center items-center flex-col space-y-12 mb-12'>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductOne} alt='product_one'/>
                    <h6 className='font-light text-xl'>Baguio Bliss Brew</h6>
                </div>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductTwo} alt='product_two'/>
                    <h6 className='font-light text-xl'>Misty Mornings Roast</h6>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col space-y-12 mb-12'>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductThree} alt='product_three'/>
                    <h6 className='font-light text-xl'>Cordillera Caffeine Kick</h6>
                </div>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductFour} alt='product_four'/>
                    <h6 className='font-light text-xl'>Sagada Sunrise Blend</h6>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col space-y-12 mb-12'>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductFive} alt='product_five'/>
                    <h6 className='font-light text-xl'>Cordillera Crema</h6>
                </div>
                <div>
                    <img className='mb-2 transition duration-300 ease-in-out transform hover:scale-110' src={ProductSix} alt='product_six'/>
                    <h6 className='font-light text-xl'>Highland Harvest Hues</h6>
                </div>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center">
                <button className="bg-transparent cursor-default font-light border border-white-100 hover:bg-white-100 text-white-100 text-3xl py-4 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105">
                    More flavors coming soon!
                </button>
            </div>
        </div>
    </div>
  )
}

export default Products