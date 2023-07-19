import React from 'react'


const submit = () => {
  return (
    <div>
      <form className="bg-black bg-opacity-90 p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="text-white text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-white text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="property-type" className="text-white text-sm font-semibold mb-2">
            Property Type
          </label>
          <select
            id="property-type"
            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select property type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="text-white text-sm font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter property location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-white text-sm font-semibold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter property price"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    
  )
}

export default submit