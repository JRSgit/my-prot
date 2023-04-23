import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function Header() {
  return (
    <div
      className='w-full flex p-4 items-center justify-between  h-[70px] border-b-2 border-y-cor-blueTheme'>
      <div className='flex bg-cor-blueTheme ml-20 p-2'>
        <Link to='/'>
          <h1 className='text-2xl flex font-bold cursor-pointer  flex-col mb-0 text-white'>
            JRS
            <small className='mt-[-10px]'>code</small>
          </h1>
        </Link>


      </div>
      <div className="flex gap-3 mr-10  items-center text-white font-bold text-2lg">
        <Link className='hover:text-cor-blueTheme transition-all ' to='/catalago'>Catalago</Link>
        <Link className='hover:text-cor-blueTheme transition-all' to='/works'>Works</Link>
      </div >

    </div >
  )
}

export default Header