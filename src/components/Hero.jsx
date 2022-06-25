import React from 'react'
import Navbar from './Navbar'

const hero = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-5xl mx-auto px-4'>
            {/* navbar */}
            <Navbar />
        </div>
    </div>
  )
}

export default hero