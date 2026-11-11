import React from 'react'
import { Link } from 'react-router-dom' // navigation ke Shop pageലേക്ക് link cheyyaan

const HeroSec = () => {
  return (
    // full width section, light background, padding for spacing
    <section className='w-full bg-blue-50 py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>

        {/* Left side - text content */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
            Discover Your <span className='text-blue-600'>Perfect Style</span>
          </h1>

          <p className='mt-4 text-gray-600 text-lg'>
            Shop the latest trends with unbeatable prices. Quality products, delivered fast.
          </p>

          {/* CTA buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <Link
              to='/shop'
              className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition'
            >
              Shop Now
            </Link>
            <Link
              to='/about'
              className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition'
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right side - image placeholder */}
        <div className='flex-1 flex justify-center'>
          <img
            src='https://via.placeholder.com/500x400'
            alt='Hero showcase'
            className='rounded-xl w-full max-w-md object-cover shadow-lg'
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSec