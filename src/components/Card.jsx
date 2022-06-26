import React from 'react'
import cardImage from '../assets/cardImage.png'
import googlePlay from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'

const Card = () => {
  return (
    <div className='w-full text-white py-24 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 items-center justify-between bgSecondary rounded-lg px-4 md:px-14 lg:px-36'>
            <div className='py-6 p-4'>
                <h3 className='text-lg'>DOWNLOAD APLIKASINYA</h3>
                <h1 className='text-3xl py-4'>Download Aplikasi Chat n' Rechat Di Play Store, App Store, atau Symbian Store</h1>
                <ul className='text-sm opacity-60'>
                    <li>&bull; Android Version: Mojave+</li>
                    <li>&bull; iOS Version: Lolipop+</li>
                    <li>&bull; Symbian: 20.04+</li>
                </ul>
                <div className='flex space-x-4 pt-8'>
                    <img className='w-[150px] h-[46px]' src={appStore} alt="/" />
                    <img className='w-[150px] h-[46px]' src={googlePlay} alt="/" />
                </div>
            </div>
            <div className='flex justify-center md:justify-end py-6 md:py-0'>
                <img className='w-80' src={cardImage} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Card