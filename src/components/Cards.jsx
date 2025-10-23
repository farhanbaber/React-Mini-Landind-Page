import React from 'react'

const Cards = () => {
  return (
  <section className='bg-whitesmoke min-h-[calc(100vh-2rem)] flex items-center  justify-center p-8 style={{ backgroundColor: "whitesmoke" }}'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl  '>
        <div className='bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition'>
      <h3 class="font-semibold text-lg">– Web Designer</h3>
             <p class="text-gray-300 mb-4">"Beautiful, user-friendly designs that captivate your audience."</p>
      <span class="text-gray-400 text-sm">Product Designer</span>
      
        </div>
        <div className='bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition'>
      <h3 class="font-semibold text-lg">– Graphic Designer</h3>
             <p class="text-gray-300 mb-4">"Clean and scalable code for all types of web applications."</p>
      <span class="text-gray-400 text-sm">Product Designer</span>
      
        </div>
        <div className='bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition'>
      <h3 class="font-semibold text-lg">– App Developer</h3>
             <p class="text-gray-300 mb-4">"Boost your search rankings and attract more visitors.

"</p>
      <span class="text-gray-400 text-sm">Product Designer</span>
      
        </div>
    </div>

  </section>
  )
}

export default Cards
