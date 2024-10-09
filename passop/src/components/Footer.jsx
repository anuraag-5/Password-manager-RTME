import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 bg-slate-800 w-full flex flex-col justify-center items-center text-white'>
            <div className='logo font-bold text-2xl'>

                <span className='text-green-500'> &lt;</span>
                Pass
                <span className='text-green-500'>OP/ &gt;</span>

            </div>
            <div className='flex justify-center items-center'>
                Created with <img src="public/Heart2.png" alt="" className=' w-4 mx-2'/> by Anurag
            </div>
        </div>
    )
}

export default Footer