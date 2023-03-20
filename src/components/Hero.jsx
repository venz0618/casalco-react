import React from 'react'
import Carousel from '../components/Carousel'


function Hero() {
  // const images = [
  //   {
  //     src: img2
  //   },
  //   {
  //     src: img3

  //   },
  //   {
  //     src: img4

  //   },
  //   {
  //     src: img5

  //   },
  // ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>

          <div className='border-y-2 border-orange-500 text-[#000] font-bold uppercase'>
            <h1 className=" text-orange-500 text-3xl">Welcome to CASALCO</h1>
          </div>
          <h1 className='py-3 text-5xl md:text-5xl font-bold'>SAVE MONEY AND MONEY WILL SAVE YOU</h1>
          <p className='text-xl text-stone-600'>Do not save what is left after spending, but spend what is left after saving</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>BECOME A MEMBER NOW</button>
        </div>
        <div>
          {/* <Carousel>
            {images.map((image, index) => (
              <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: "url(" + image.src + ")" }}
              />
            ))}
          </Carousel> */}
          <Carousel/>
        </div>
      </div>
    </div>
  )
}

export default Hero