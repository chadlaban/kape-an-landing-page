import React, { useState } from 'react'

const Mission = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='text-white max-w-[1240px] my-8 mx-auto grid md:grid-cols-2 py-14'>
            <div className='text-center'>
                <h1 className='mt-4 md:text-8xl sm:text-6xl text-5xl font-semibold'>Our Mission</h1>
                <article className='md:text-lg sm:text-lg text-base justify-center my-auto p-6'>
                    At KAPE-AN, our mission is to preserve and celebrate the rich coffee tradition of Baguio City, Philippines, by sharing its unique flavors and character with coffee lovers around the world. We are dedicated to honoring our heritage, sustaining our local communities, and ensuring the highest quality in every step of the coffee journey, from farm to cup. With your support, we strive to provide a taste of Baguio's exquisite coffee, one cup at a time, while fostering prosperity and sustainability for our cherished region.
                </article>
            </div>
            <div className='max-w-[1240px] mx-20 mt-4 z-0'>
                <form onSubmit='' className="bg-[#D7D8D7] text-[#000300] rounded-xl space-y-6 p-6 text-xl ">
                    <div className=''>
                        <label htmlFor="fullName" className="block text-[#000300]">
                            Full Name:
                        </label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[#000300]">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                    <div>
                        <label htmlFor="feedback" className="block text-[#000300]">
                            Feedback:
                        </label>
                        <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" rows="4" required></textarea>
                    </div>
                    <div className='pb-10'>
                        <button type="submit" className="bg-[#4D4E49] text-white font-light px-6 py-2 rounded-md hover:bg-[#4D4E49] scale-105 float-right">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Mission