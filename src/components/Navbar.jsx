import React, { useState } from 'react';
import {MenuIcon , XIcon} from '@heroicons/react/outline'
import img from '../assets/CasalcoLogo-7.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Casalco</h1> */}
                    <img className='w-[130px]' src={img} alt="/" />
                    

                </div>
                <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4 '>Sign In</button>
                    <button className='px-8 py-3'>Register</button>

                </div>
                <div className=' md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5'/>: <XIcon className='w-5'/>
                    }


                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className=' border-b-2 border-zinc-300 w-full'>Home</li>
                <li className=' border-b-2 border-zinc-300 w-full'>About Us</li>
                <li className=' border-b-2 border-zinc-300 w-full'>Products</li>
                <li className=' border-b-2 border-zinc-300 w-full'>Services</li>
                <li className=' border-b-2 border-zinc-300 w-full'>Contact Us</li>
                <div className=' flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Register</button>

                </div>
            </ul>

        </div>

    )


}
export default Navbar;