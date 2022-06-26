import React from 'react'
import featuredImage1 from '../assets/featuredImage1.png'
import featuredImage2 from '../assets/featuredImage2.png'
import featuredImage3 from '../assets/featuredImage3.png'

const Featured = () => {
  return (
    <div name='fitur' className='max-w-[1240px] px-4 mx-auto py-32'>
        <div className='text-center pb-28'>
            <h3 className='text-lg textSecondary'>NGGAK HARUS SIH SEBENERNYA</h3>
            <h1 className='text-4xl textSecondary py-4'>Kenapa Harus Pakai Chat N' Rechat?</h1>
            <p className='text-lg text-slate-600 md:w-8/12 mx-auto'>Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
            <div className='pb-10'>
                <img className='w-52 mx-auto' src={featuredImage1} alt="/" />
                <h2 className='pt-6 pb-4 text-xl font-semibold textSecondary text-center'>Groups to keep in touch</h2>
                <p className='text-center text-slate-600 md:w-10/12 mx-auto'>Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.</p>
            </div>
            <div className='pb-10'>
                <img className='w-[270px] mx-auto' src={featuredImage2} alt="/" />
                <h2 className='pt-6 pb-4 text-xl font-semibold textSecondary text-center'>Simple, Reliable Messaging</h2>
                <p className='text-center text-slate-600 md:w-10/12 mx-auto'>Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.</p>
            </div>
            <div className='pb-10'>
                <img className='w-52 mx-auto' src={featuredImage3} alt="/" />
                <h2 className='pt-6 pb-4 text-xl font-semibold textSecondary text-center'>Speak Freely</h2>
                <p className='text-center text-slate-600 md:w-10/12 mx-auto'>With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations.</p>
            </div>
        </div>
    </div>
  )
}

export default Featured