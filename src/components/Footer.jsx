import React from 'react'
import logoNav from '../assets/logo.png'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 bgPrimary pt-20 pb-4'>
        <div className='grid md:grid-cols-4 gap-4 md:w-10/12 mx-auto'>
            <div className='col-span-2'>
                <h3 className='textSecondary flex items-center'><img className='h-8 w-8' src={logoNav} alt="/" /><span className='text-lg ml-4 font-bold'>Chat N' Rechat</span></h3>
                <p className='text-slate-600 py-4'>Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
                <p className='text-slate-600 text-sm'>COPYRIGHT (C) 2021. DESIGN BY NAUVAL. CODED BY HASYIM.</p>
            </div>
            <div className='py-10 md:py-0'>
                <h3 className='text-lg font-bold'>Sitemap</h3>
                <ul className='text-slate-600 font-semibold space-y-3 mt-6'>
                    <li className='cursor-pointer'><Link to='beranda' smooth={true} offset={50} duration={500}>Beranda</Link></li>
                    <li className='cursor-pointer'><Link to='fitur' smooth={true} offset={50} duration={500}>Fitur-fitur</Link></li>
                    <li className='cursor-pointer'><Link to='teknologi' smooth={true} offset={50} duration={500}>Teknologi</Link></li>
                    <li className='cursor-pointer'><Link to='faq' smooth={true} offset={50} duration={500}>FAQ</Link></li>
                    <li className='cursor-pointer'><Link to='download' smooth={true} offset={50} duration={500}>Download</Link></li>
                </ul>
            </div>
            <div className='py-10 md:py-0'>
                <h3 className='text-lg font-bold'>Tetep Terhubung</h3>
                <p className='text-slate-600 py-6'>Lihat kami pansos di sosial media berikut:</p>
                <div className='flex items-center space-x-2'>
                    <div className='p-2 rounded-md bg-[#c2c7d2]'>
                        <FaInstagram className='w-6 h-6' />
                    </div>
                    <div className='p-2 rounded-md bg-[#c2c7d2]'>
                        <FaTwitter className='w-6 h-6' />
                    </div>
                    <div className='p-2 rounded-md bg-[#c2c7d2]'>
                        <FaFacebook className='w-6 h-6' />
                    </div>
                    <div className='p-2 rounded-md bg-[#c2c7d2]'>
                        <FaYoutube className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer