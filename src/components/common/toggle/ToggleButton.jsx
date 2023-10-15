import React from 'react'

const ToggleButton = () => {
  return (
    <label 
      htmlFor='toggle-switch'
      className='lg:block'
    >
      <input 
        type="checkbox" 
        className='cursor-pointer w-12 h-6 rounded-full appearance-none bg-white bg-opacity-5 border-neon checked:bg-gray-700 transition duration-200 relative'
        id="toggle-switch" 
      />
      {/* <div
        className="w-11 h-6 bg-gray-900 rounded-full after:content-[''] after:absolute after:w-5 after:h-5 after:rounded-full after:bg-neon peer-checked:after:translate-x-full border-2 border-neon"
      ></div> */}

    </label>
  )
}

export default ToggleButton