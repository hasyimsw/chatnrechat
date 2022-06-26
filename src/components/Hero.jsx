import React from 'react'
import Navbar from './Navbar'
import heroImage from '../assets/heroImage.png'
import heroImage2 from '../assets/heroImage2.png'
import heroImage3 from '../assets/heroImage3.png'
import heroImage4 from '../assets/heroImage4.png'
import heroImage5 from '../assets/heroImage5.png'
import heroImage6 from '../assets/heroImage6.png'
import arrowRight from '../assets/arrow-right-circle.png'
import download from '../assets/download.png'
import user from '../assets/user.png'

const hero = () => {
  return (
    <div name='beranda' className='w-full h-full'>
        <div className='max-w-[1240px] mx-auto px-4'>
            {/* navbar */}
            <Navbar />
            {/* hero */}
            <div className='grid md:grid-cols-2 items-center pt-10 pb-16'>
                <div>
                    <h3 className='textPrimary text-lg'>CHAT N' RECHAT</h3>
                    <h1 className='text-4xl py-4 textSecondary'>Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</h1>
                    <p className='w-10/12 text-lg text-slate-600'>Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
                    <div className='flex space-x-4 py-4'>
                        <button className='buttonPrimary flex items-center px-8'>Register <img className='w-5 h-5 ml-2' src={arrowRight} alt="/" /></button>
                        <button className='buttonSecondary px-8'>Learn More</button>
                    </div>
                    <div className='flex items-center space-x-10 pt-4 pb-8'>
                        <div className='flex'>
                            <img className='w-6 h-6' src={download} alt="/" />
                            <div className='ml-4'>
                                <p className='text-slate-600 text-xs'>TOTAL DOWNLOAD</p>
                                <p className='text-2xl font-semibold'>1,501,234</p>
                            </div>
                        </div>
                        <div className='opacity-30 h-8'>|</div>
                        <div className='flex'>
                            <img className='w-6 h-6' src={user} alt="/" />
                            <div className='ml-4'>
                                <p className='text-slate-600 text-xs'>TOTAL USERS</p>
                                <p className='text-2xl font-semibold'>1,318,829</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="/" />
                </div>
            </div>
            <div className='flex items-center justify-around md:max-w-5xl mx-auto h-20 md:h-28 lg:px-20 bgPrimary rounded-md'>
               <img className='h-4 sm:h-5 md:h-7' src={heroImage2} alt="/" /> 
               <img className='h-4 sm:h-5 md:h-7' src={heroImage3} alt="/" /> 
               <img className='h-4 sm:h-5 md:h-7' src={heroImage4} alt="/" /> 
               <img className='h-4 sm:h-5 md:h-7' src={heroImage5} alt="/" /> 
               <img className='h-4 sm:h-5 md:h-7' src={heroImage6} alt="/" /> 
            </div>
        </div>
    </div>
  )
}

export default hero