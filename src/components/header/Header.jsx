import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function Header() {
  return (
    <div
      className='w-full flex p-4 items-center justify-between  h-[70px] border-b-2 border-y-cor-blueTheme'>
      <div className='flex bg-cor-blueTheme ml-20 p-2'>
        <h1 className='text-2xl flex font-bold  flex-col mb-0 text-white'>
          JRS
          <small className='mt-[-10px]'>code</small>
        </h1>

      </div>
      <div className="flex gap-3 mr-10  items-center text-white font-bold text-2lg">
        <a className='hover:text-cor-blueTheme transition-all ' href='/'>Catalago</a>
        <a className='hover:text-cor-blueTheme transition-all' href='/'>Works</a>
      </div >

    </div >
  )
}

export default Header