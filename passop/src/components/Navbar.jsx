import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white px-20'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className='logo font-bold text-2xl'>

          <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>OP/ &gt;</span>

        </div>
        <button className=' flex justify-center items-center gap-2 bg-green-700 rounded-full p-1 text-white '>
          <img src="public/Github.svg" alt="" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
