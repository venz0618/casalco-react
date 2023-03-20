import React from 'react'

function About() {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>Trusted by developer across the world</h1>
                    <p className='text-3xl py-6 text-gray-500'>Jonas Balite Gahi na Programmer</p>
                </div>
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p>Completation</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p>Delivery</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100k</p>
                        <p>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About