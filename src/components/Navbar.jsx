import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoNav from '../assets/logo.png'
import {Link} from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const handleClose = () => {
        setNav(!nav);
    };

  return (
    <div className='h-28 flex items-center justify-between'>
        <img className='w-9' src={logoNav} alt="/" />
        <ul className='hidden md:flex items-center justify-center space-x-10 text-xl textSecondary'>
            <li className='cursor-pointer hover:font-semibold'><Link to='beranda' smooth={true} duration={500}>Beranda</Link></li>
            <li className='cursor-pointer hover:font-semibold'><Link to='fitur' smooth={true} offset={50} duration={500}>Fitur-fitur</Link></li>
            <li className='cursor-pointer hover:font-semibold'><Link to='teknologi' smooth={true} offset={50} duration={500}>Teknologi</Link></li>
            <li className='cursor-pointer hover:font-semibold'><Link to='faq' smooth={true} offset={50} duration={500}>FAQ</Link></li>
        </ul>
        <div className='hidden md:flex'>
            <button className='buttonPrimary'>Download</button>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <AiOutlineClose size={24} className='text-black cursor-pointer' /> : <AiOutlineMenu size={24} className='text-black cursor-pointer' /> }
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-6/12 p-3 bg-white shadow-md rounded-md absolute top-20 right-3 flex flex-col py-4 space-y-5 transition-all duration-700' : 'absolute right-[100%]'}>
            <ul className='space-y-5 text-center textSecondary'>
                <li className='cursor-pointer'><Link onClick={handleClose} to='beranda' smooth={true} offset={50} duration={500}>Beranda</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClose} to='fitur' smooth={true} offset={50} duration={500}>Fitur-fitur</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClose} to='teknologi' smooth={true} offset={50} duration={500}>Teknologi</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClose} to='faq' smooth={true} offset={50} duration={500}>FAQ</Link></li>
            </ul>
            <button name='download' className='buttonPrimary'>Download</button>
        </div>

    </div>
  )
}

export default Navbar