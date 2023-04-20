import React from 'react'
import { motion } from 'framer-motion'


function MyLogo() {
  return (
    <>
      <div className={`
              w-[200px] mt-20  h-[200px] flex 
              items-center relative
              justify-center shadow-2xl 
              shadow-cor-blueTheme

              `}>

      </div>
      <div className={`
          font-bold text-white  text-6xl
          absolute top-[180px] shadow-cor-blueTheme
          flex flex-col items-center justify-center

        `}>
        <h1>JRS</h1>
        <h3>code</h3>

      </div>
    </>

  )
}

export default MyLogo