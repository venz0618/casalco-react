import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'

import img1 from '../assets/casalco.jpg'

function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={img1} alt="/" />
      </div>
      <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
      mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
      borderborder-slate-300 rounded-xl text-center shadow-xl'>
        <p>Data Services</p>
        <div>
          <p> App Security</p>
          <p>Icon. App Dashboard</p>
          <p>Icon. App Cloud Date</p>
          <p>Icon. App API</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero