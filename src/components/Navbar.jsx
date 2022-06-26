import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoNav from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='h-28 flex items-center justify-between'>
        <img className='w-9' src={logoNav} alt="/" />
        <ul className='hidden md:flex items-center justify-center space-x-10 text-xl textSecondary'>
            <li className='font-semibold'>Beranda</li>
            <li>Fitur-fitur</li>
            <li>Teknologi</li>
            <li>FAQ</li>
        </ul>
        <div className='hidden md:flex'>
            <button className='buttonPrimary'>Download</button>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <AiOutlineClose size={24} className='text-black' /> : <AiOutlineMenu size={24} className='text-black' /> }
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-6/12 p-3 bg-white shadow-md rounded-md absolute top-20 right-3 flex flex-col py-4 space-y-5 transition-all duration-700' : 'absolute right-[100%]'}>
            <ul className='space-y-5 text-center textSecondary'>
                <li className='font-semibold'>Beranda</li>
                <li>Fitur-fitur</li>
                <li>Teknologi</li>
                <li>FAQ</li>
            </ul>
            <button className='buttonPrimary'>Download</button>
        </div>

    </div>
  )
}

export default Navbar