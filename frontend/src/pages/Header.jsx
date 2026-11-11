import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className='h-20 w-full shadow-md bg-white flex items-center justify-between px-6 '>
      
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <h1 className='text-2xl font-bold text-blue-600'>MyStore</h1>
      </div>

      {/* Nav links - desktop */}
      <nav className='hidden md:flex items-center gap-8'>
        <a href="#" className='text-gray-700 hover:text-blue-600 font-medium'>Home</a>
        <a href="#" className='text-gray-700 hover:text-blue-600 font-medium'>Shop</a>
        <a href="#" className='text-gray-700 hover:text-blue-600 font-medium'>About</a>
        <a href="#" className='text-gray-700 hover:text-blue-600 font-medium'>Contact</a>
      </nav>

      {/* Right side icons */}
      <div className='flex items-center gap-5'>
        <Search className='w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600' />
        <div className='relative'>
          <ShoppingCart className='w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600' />
          <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
            0
          </span>
        </div>
        {/* Mobile menu icon */}
        <Menu className='w-6 h-6 text-gray-700 cursor-pointer md:hidden' />
      </div>

    </header>
  )
}

export default Header