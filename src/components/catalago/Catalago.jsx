import React from 'react'
import Card from '../card/Card'
import { motion } from 'framer-motion'

import belezaImg from '../../assets/beleza.png'
import fitnessImg from '../../assets/fitness.png'
import escolaImg from '../../assets/escola.png'

const card = [
  {
    img: belezaImg,
    url: 'https://model-beleza.vercel.app/',
    title: 'Modelo Beleza'
  },
  {
    img: fitnessImg,
    url: 'https://fitness-one-pi.vercel.app/',
    title: 'Modelo Fitness'
  },
  {
    img: escolaImg,
    url: 'https://escola-six.vercel.app/',
    title: 'Modelo Escolar'
  },
]

function Catalago() {


  return (
    <div className='flex items-center justify-center flex-col mt-40 mb-20'>
      <h1 className='text-white text-[3.3rem] font-bold'>
        <small className='pl-4 bg-cor-blueTheme text-[3.3rem]'>T</small>rabalhos Recentes</h1>
      <h4 className='text-white text-[1rem] font-bold'>Obras desenvolvidas recentimentes</h4>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, x: 1 }}

        className=' mt-14 w-[90%] flex flex-wrap gap-5 items-center justify-center'>
        {card && card.map((c, i) => (
          i % 2 === 0
            ? (<Card key={i} border=' border-x-[4px] border-x-cor-blueTheme' title={c.title} img={c.img} url={c.url} />)
            : (<Card key={i} border=' border-y-[4px] border-y-red-800' title={c.title} img={c.img} url={c.url} />)
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, x: 1 }}

        className='mt-10 mb-20 '>
        <button className={`
        hover:bg-slate-400
          p-4 bg-gradient-to-r rounded-[16px] 
        from-blue-600 to-purple-600 
          
        `}>DEMAIS MODELOS</button>
      </motion.div>
    </div>
  )
}

export default Catalago