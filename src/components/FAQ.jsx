import React, { useState } from 'react'
import dropDownpng from '../assets/dropDown.png'
import dropDown2png from '../assets/dropDown2.png'

const FAQ = () => {

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const [dropDown2, setDropDown2] = useState(false);
  const handleDropDown2 = () => {
    setDropDown2(!dropDown2);
  };
  const [dropDown3, setDropDown3] = useState(false);
  const handleDropDown3 = () => {
    setDropDown3(!dropDown3);
  };
  const [dropDown4, setDropDown4] = useState(false);
  const handleDropDown4 = () => {
    setDropDown4(!dropDown4);
  };
  const [dropDown5, setDropDown5] = useState(false);
  const handleDropDown5 = () => {
    setDropDown5(!dropDown5);
  };
  const [dropDown6, setDropDown6] = useState(false);
  const handleDropDown6 = () => {
    setDropDown6(!dropDown6);
  };
  const [dropDown7, setDropDown7] = useState(false);
  const handleDropDown7 = () => {
    setDropDown7(!dropDown7);
  };

  return (
    <div name='faq' className='max-w-[1240px] px-4 mx-auto py-28'>
      <div className='text-center textSecondary pb-10'>
        <h3 className='text-lg'>BANYAK YANG NANYA</h3>
        <h1 className='text-4xl py-4'>Pertanyaan Yang Sering Ditanyain</h1>
        <p className='text-lg text-slate-600'>Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca 'kan.</p>
      </div>
      <div className='md:w-10/12 lg:w-8/12 mx-auto py-14'>
        {/* dropdown */}
        <div onClick={handleDropDown}>
          {
            dropDown ? 
              <div className='bgSecondary rounded-md text-white mt-10 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Apakah aplikasi ini sudah dapat izin dari MUI?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Tentu belum dong, kan aplikasi ini cuma buat iseng-iseng aja.</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-10'>
                  <p className='text-lg textSecondary'>Apakah aplikasi ini sudah dapat izin dari MUI?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown2}>
          {
            dropDown2 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Apakah aplikasi ini gratis?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Apakah aplikasi ini gratis?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown3}>
          {
            dropDown3 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Apakah data saya akan dijual ke agen khusus US?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Data anda akan kami jual di pengepul ikan gabus, buat dijadiin pengawet alami ikan.</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Apakah data saya akan dijual ke agen khusus US?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown4}>
          {
            dropDown4 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Kenapa bumi muter? Apa karena di depan ada yang nikah?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Kalau ga muter berarti lagi maintenance. BTW yang nikah di depan mantan lu kan?</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Kenapa bumi muter? Apa karena di depan ada yang nikah?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown5}>
          {
            dropDown5 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Gimana caranya supaya si Rizal mau bikin konten buat Array ID?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Naikin gaji si Rizal -4x lipat!</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Gimana caranya supaya si Rizal mau bikin konten buat Array ID?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown6}>
          {
            dropDown6 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Pertanyaan di atas gabakal ada yang bisa jawab sih</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Udah dijawab semua atuh :) Kan saya terlalu gabut buat menjawab semua pertanyaan anda.</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Pertanyaan di atas gabakal ada yang bisa jawab sih</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>
        <div onClick={handleDropDown7}>
          {
            dropDown7 ? 
              <div className='bgSecondary rounded-md text-white mt-4 shadow-lg transition-transform'>
                <div className='flex items-center justify-between px-6 p-6'>
                  <p className='text-lg'>Kenapa game epep burik, bang?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDown2png} alt="/" />
                </div>
                <hr className='border-b-[0,5px] opacity-20 border-white' />
                <p className='p-6'>Karena game epep ga ada pintu, wqwqwq. Kek rumah kosong anjir :v</p>
              </div> : 
              <>
                <div className='flex items-center justify-between px-6 p-6 mt-4'>
                  <p className='text-lg textSecondary'>Kenapa game epep burik, bang?</p>
                  <img className='w-6 h-6 cursor-pointer' src={dropDownpng} alt="/" />
                </div>
                <hr className='border-b-[1px]' />
              </>
          }
        </div>

      </div>
    </div>
  )
}

export default FAQ