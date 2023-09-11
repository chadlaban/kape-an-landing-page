import React from 'react'

const AboutUs = () => {
  return (
    <div className='text-white mb-[6rem] max-w-[1240px] mx-auto grid md:grid-cols-2 py-14' id='about'>
        <p className='md:text-8xl sm:text-6xl text-5xl font-semibold my-auto uppercase flex flex-row md:flex-col text-center justify-center'>
            <span className='p-3'>who</span>
            <span className='p-3'>are</span>
            <span className='p-3'>we?</span>  
        </p>
        <article className='md:text-lg sm:text-lg text-base justify-center my-auto p-6'>
            Welcome to KAPE-AN, where the rich coffee tradition of Baguio City, Philippines comes to life. Nestled amidst the lush landscapes and fertile lands passed down by our ancestors.
            Our journey began with a deep appreciation for the natural bounty that surrounded us. Baguio's unique microclimate and fertile soil have nurtured a vibrant array of coffee varieties, each with its distinct flavor profile and character.
            Driven by the desire to honor our heritage and make the most of our abundant coffee resources, we embarked on a mission to produce, sell, and share the exquisite flavors of Baguio coffee with the world. What started as a local endeavor soon grew into a global passion.
            From the picturesque coffee farms to your cup, we are involved in every step of the journey. We carefully select, roast, and package our coffee to ensure that the unique flavors of Baguio are delivered to you at their peak. 
            Your support allows us to continue our tradition of producing exceptional coffee while contributing to the prosperity of our local communities.
            Join us in savoring the essence of Baguio, one cup at a time.
        </article>
    </div>
  )
}

export default AboutUs