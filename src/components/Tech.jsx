import React from 'react'
import techImage from '../assets/techImage.png'
import techImage2 from '../assets/techImage2.png'
import techImage3 from '../assets/techImage3.png'
import techImage4 from '../assets/techImage4.png'

const Tech = () => {
  return (
    <div className='max-w-[1240px] px-4 mx-auto py-28'>
        <div className='grid md:grid-cols-2 gap-2 items-center'>
            <img src={techImage} alt="/" />
            <div>
                <h3 className='text-lg textSecondary'>TEKNOLOGI YANG DIGUNAKAN</h3>
                <h1 className='text-3xl textSecondary py-4'>Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱</h1>
                <p className='text-slate-600 text-lg pb-14'>Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:</p>
                <div className='flex mb-10'>
                    <img className='w-16 h-16' src={techImage2} alt="/" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold textSecondary'>Kamu Adalah Beban Kami</h3>
                        <p className='text-slate-600 text-lg mt-2'>Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!</p>
                    </div>
                </div>
                <div className='flex mb-10'>
                    <img className='w-16 h-16' src={techImage3} alt="/" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold textSecondary'>Males Buat Ngembangin</h3>
                        <p className='text-slate-600 text-lg mt-2'>Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.</p>
                    </div>
                </div>
                <div className='flex'>
                    <img className='w-16 h-16' src={techImage4} alt="/" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold textSecondary'>Pokoknya Males Aja Lah</h3>
                        <p className='text-slate-600 text-lg mt-2'>Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech