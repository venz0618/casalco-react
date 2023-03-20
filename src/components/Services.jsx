import React from 'react'
import {
    DocumentIcon,
    DocumentTextIcon,
    ChevronDoubleRightIcon,
   
} from '@heroicons/react/solid'

function Services() {
    return (
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
    border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='font-bold uppercase'>Products Offered</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-state-500 font-bold uppercase'><DocumentIcon className=' h-6 text-indigo-600' /> Regular Loan</p>
                <p className='flex px-4 py-2 text-state-500 font-bold uppercase'><ChevronDoubleRightIcon className=' h-6 text-indigo-600' /> Express Loan</p>
                <p className='flex px-4 py-2 text-state-500 font-bold uppercase'><DocumentTextIcon className=' h-6 text-indigo-600' /> Special Loan</p>
                
            </div>
        </div>
    )
}

export default Services