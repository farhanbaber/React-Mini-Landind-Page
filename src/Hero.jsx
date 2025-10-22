import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="border w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url(img.jpg)" }} >
        <h1 className='text-5xl font-bold mb-4 text-white text-center   relative top-16'>Welcome to Our React Landing Page</h1>
        <p className='text-lg mb-8 text-white text-white text-center relative top-16'>We create modern solutions for your digital needs.</p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors duration-300 mx-auto block relative top-14">Get Started</button>
      </div>
      
    </div>
  )
}

export default Hero
