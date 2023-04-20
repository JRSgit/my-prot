import React from 'react'
import JRS from '../../assets/jrs.png'

function Card({ border }) {

  return (
    <div>
      <div className={`
       ${border} hover:cursor-pointer
        w-[405px] h-[285px] bg-[rgb(13,13,15)]
        p-[8px] overflow-hidden rounded-lg
      `}>
        <h2 className='text-[#c2c2c2]  text-[1.7rem] font-bold mb-2 ml-1'>Card</h2>
        <div className=' hover:scale-[1.02] transition-all rounded-[10px]  overflow-hidden w-full h-[210px] bg-gray-800'>
          <img className='w-full object-cover' src={JRS} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card