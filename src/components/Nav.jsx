import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className='bg-gray-500 text-white p-4 flex justify-between items-center'>
        <h1 className='font-black text-4xl p-4 cursor-pointer' >My Landing Page</h1>
        <ul className='flex space-x-4'>
          <li className='text-2xl p-4 cursor-pointer text-gray-100 hover:text-gray-600 transition-colors duration-300'> Home</li>
          <li className='text-2xl p-4 cursor-pointer text-gray-100 hover:text-gray-600 transition-colors duration-300'>About</li>
          <li className='text-2xl p-4 cursor-pointer text-gray-100 hover:text-gray-600 transition-colors duration-300'>Services</li>
          <li className='text-2xl p-4 cursor-pointer text-gray-100 hover:text-gray-600 transition-colors duration-300'>Contact</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Nav
