import React from 'react'
import Header from '../../components/header/Header'
import MyLogo from '../../components/my-logo/MyLogo'
import { motion, useScroll } from "framer-motion"

import Node from '../../assets/node.svg'
import Mongo from '../../assets/mongo.svg'
import ReactL from '../../assets/react-l.svg'
import Catalago from '../../components/catalago/Catalago'
import Feature from '../../components/feature/Feature'
import Footer from '../../components/footer/Footer'

function Homes() {
  const { scrollXProgress } = useScroll()
  return (
    <>
      <div
        className='w-full flex flex-col items-center justify-start relative'>
        <Header />
        <MyLogo />

        <motion.h1
          initial={{ x: 700 }}
          animate={{ x: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}

          className={`
          text-[3.5rem] text-white
          mt-20
          `}>Development FullStack
        </motion.h1>

        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 1 }}
          transition={{ duration: 3 }}
          className={`
                flex justify-around
                w-3/4 mt-20
          `}>
          <div className='flex flex-col items-center shadow-2xl 
              shadow-cor-blueTheme p-2'>
            <img className='w-[70px]' src={Node} alt="" />
            <span className='text-white text-4xl'>Node</span>
          </div>

          <div className='flex flex-col items-center shadow-2xl 
              shadow-cor-blueTheme p-2'>
            <img className='w-[70px]' src={Mongo} alt="" />
            <span className='text-white text-4xl'>Mongo</span>
          </div>

          <div className='flex flex-col items-center shadow-2xl 
              shadow-cor-blueTheme p-2'>
            <img className='w-[70px]' src={ReactL} alt="" />
            <span className='text-white text-4xl'>React</span>
          </div>

        </motion.div>

        <Catalago />
        <Feature />
        <Footer />

      </div>
    </>
  )
}

export default Homes