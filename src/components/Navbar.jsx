import React from 'react'
import logoNav from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='h-28 flex items-center justify-between'>
        <img className='w-9' src={logoNav} alt="/" />
        <ul className='flex items-center justify-center space-x-10'>
            <li className='font-semibold'>Beranda</li>
            <li>Fitur-fitur</li>
            <li>Teknologi</li>
            <li>FAQ</li>
        </ul>
        <div>
            <button className='buttonPrimary'>Download</button>
        </div>
    </div>
  )
}

export default Navbar