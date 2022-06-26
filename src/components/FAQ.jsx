import React from 'react'
import dropDown from '../assets/dropDown.png'
import dropDown2 from '../assets/dropDown2.png'

const FAQ = () => {
  return (
    <div name='faq' className='max-w-[1240px] px-4 mx-auto py-28'>
        <div className='text-center textSecondary pb-24'>
          <h3 className='text-lg'>BANYAK YANG NANYA</h3>
          <h1 className='text-4xl py-4'>Pertanyaan Yang Sering Ditanyain</h1>
          <p className='text-lg text-slate-600'>Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca 'kan.</p>
        </div>
        <div className='md:w-10/12 lg:w-8/12 mx-auto py-14 md:py-20'>
          <div className='flex items-center justify-between px-6'>
            <p className='text-lg textSecondary'>Apakah aplikasi ini sudah dapat izin dari MUI?</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
          <div className='bgSecondary rounded-md text-white mt-10 shadow-lg'>
            <div className='flex items-center justify-between px-6 p-6'>
              <p className='text-lg'>Apakah aplikasi ini gratis?</p>
              <img className='w-6 h-6 cursor-pointer' src={dropDown2} alt="/" />
            </div>
            <hr className='border-b-[0,5px] opacity-20 border-white' />
            <p className='p-6'>Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.</p>
          </div>
          <div className='flex items-center justify-between px-6 mt-10'>
            <p className='text-lg textSecondary'>Apakah data saya akan dijual ke agen khusus US?</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
          <div className='flex items-center justify-between px-6 mt-10'>
            <p className='text-lg textSecondary'>Kenapa bumi muter? Apa karena di depan ada yang nikah?</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
          <div className='flex items-center justify-between px-6 mt-10'>
            <p className='text-lg textSecondary'>Gimana caranya supaya si Rizal mau bikin konten buat Array ID?</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
          <div className='flex items-center justify-between px-6 mt-10'>
            <p className='text-lg textSecondary'>Pertanyaan di atas gabakal ada yang bisa jawab sih</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
          <div className='flex items-center justify-between px-6 mt-10'>
            <p className='text-lg textSecondary'>Kenapa game epep burik, bang?</p>
            <img className='w-6 h-6 cursor-pointer' src={dropDown} alt="/" />
          </div>
          <hr className='border-b-[1px] mt-4' />
        </div>
    </div>
  )
}

export default FAQ