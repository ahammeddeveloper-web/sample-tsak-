import React, { useState } from 'react'

const AddItems = () => {
  const [item, setItem] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New Item:', item)
    // Ivide backend API call cheyyam (POST request)
    alert('Item added successfully!')
    setItem({ name: '', price: '', category: '', stock: '', description: '', image: '' })
  }

  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Add New Item</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Item Name</label>
          <input
            type='text'
            name='name'
            value={item.name}
            onChange={handleChange}
            placeholder='Enter item name'
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='flex gap-4'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Price (₹)</label>
            <input
              type='number'
              name='price'
              value={item.price}
              onChange={handleChange}
              placeholder='0.00'
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Stock</label>
            <input
              type='number'
              name='stock'
              value={item.stock}
              onChange={handleChange}
              placeholder='Quantity'
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
          <select
            name='category'
            value={item.category}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          >
            <option value=''>Select category</option>
            <option value='electronics'>Electronics</option>
            <option value='fashion'>Fashion</option>
            <option value='grocery'>Grocery</option>
            <option value='home'>Home & Living</option>
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Image URL</label>
          <input
            type='text'
            name='image'
            value={item.image}
            onChange={handleChange}
            placeholder='https://example.com/image.jpg'
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
          <textarea
            name='description'
            value={item.description}
            onChange={handleChange}
            rows='3'
            placeholder='Item description'
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition'
        >
          Add Item
        </button>

      </form>
    </div>
  )
}

export default AddItems