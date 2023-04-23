import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import Tcss from '../../assets/tcss2.png'
import Docker from '../../assets/docker.png'
import Swiper from '../../assets/swiper.png'
import Node from '../../assets/node.svg'
import ReactI from '../../assets/react.svg'
import Mongo from '../../assets/mongo.svg'
import Firebase from '../../assets/firebase.svg'
import Prisma from '../../assets/prisma.svg'


function Feature() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/saiba-mais/front-back')
  }

  return (
    <div className='text-white flex flex-col items-center justify-center'>
      <h1 className='text-[3.5rem] mb-4'>
        <small className='text-[3.5rem] font-bold pl-4 bg-cor-blueTheme'>F</small>eatures
      </h1>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 1 }}
        className='flex flex-col items-center justify-center '>
        <h3 className=''>Aplicativos criados com os recursos mais recentes.</h3>
        <h5 className='mt-10 capitalize'>aplicativos desenvolvidos com a pilha mais utilizada no mercado de programação</h5>

        <div className='flex gap-4 mt-10 flex-wrap justify-center'>

          <div className='flex flex-col items-center justify-center p-4 bg-[rgb(30,30,24)] text-white rounded-lg'>
            <div className='flex items-center'>
              <img src={Node} width={40} alt="" />
              <span className='ml-2'> Node Js</span>
            </div>
            <span>
              Ferramenta com alta perfornace e velocidade em backend.
            </span>
          </div>

          <div className='flex flex-col items-center justify-center p-6 bg-[rgb(30,30,24)] text-white rounded-lg'>
            <div className='flex items-center'>
              <img src={ReactI} width={40} alt="" />
              <span className='ml-2'> React Js</span>
            </div>
            <span>A tecnologia usado pelos gigantes da web</span>
          </div>

          <div className='flex flex-col items-center justify-center p-6 bg-[rgb(30,30,24)] text-white rounded-lg'>
            <div className='flex items-center'>
              <img src={Mongo} width={40} alt="" />
              <span className='ml-2'> Mongo Js</span>
            </div>
            <span>Um banco de dados seguro e rápido</span>
          </div>

          <div className='flex flex-col items-center justify-center p-6 bg-[rgb(30,30,24)] text-white rounded-lg'>
            <div className='flex items-center'>
              <img src={Firebase} width={40} alt="" />
              <span className='ml-2'> Firebase</span>
            </div>
            <span>Serviço de nuvel mais utilizado.</span>
          </div>

          <div className='flex flex-col items-center justify-center p-6 bg-[rgb(30,30,24)] text-white rounded-lg'>
            <div className='flex items-center'>
              <img src={Prisma} width={40} alt="" />
              <span className='ml-2'>Prisma</span>
            </div>
            <span>Simple de salvar dados em diversos bancos de dados</span>
          </div>

        </div>

        <div className='mt-10 mb-20 flex flex-col items-center justify-center'>
          <h1 className='text-4xl mb-3'>FrontEnd & BackEnd</h1>
          <span>Front and Back desenvolvido e implementado de forma escalável e aplicável.</span>
          <button
            onClick={handleClick}
            className='p-4 bg-[rgb(211,48,59)] text-[1rem] font-bold mt-10 rounded-[30px] uppercase'>
            Saiba Mais
          </button>
        </div>

        <div className='flex mb-20 w-full items-center justify-center'>
          <hr className='bg-gray-800 w-full ' />
          <h1 className=' p-2'>OR</h1>
          <hr className='bg-gray-800 w-full ' />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl mb-4'>Node Js, MongoDB, React JS, React Native. </h1>
          <span className='mb-10'>
            Esses nomes possibilitaram e continuam possibilitando todo esse avanço,
            escalabilidade, interatividade, permitindo uma visão de futuro sem limites.
          </span>

          <div className='flex gap-5 flex-wrap'>

            <div className='flex mb-10 flex-col items-center justify-center max-h-[100px]  bg-[#fff] rounded-lg'>
              <img src={Tcss} alt="tcss" className='w-[200px]  m-0 p-0  object-cover' />
            </div>

            <div className='flex mb-10 flex-col items-center justify-center max-h-[100px]  bg-[#fff] rounded-lg'>
              <img src={Docker} alt="tcss" className='w-[200px] m-0 p-0  object-cover' />
            </div>

            <div className='flex mb-10 flex-col items-center justify-center max-h-[100px]  bg-[#fff] rounded-lg'>
              <img src={Swiper} alt="tcss" className='w-[200px] m-0 p-0  object-cover' />
            </div>


          </div>

        </div>
      </motion.div>

    </div>
  )
}

export default Feature