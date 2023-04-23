import React from 'react'

function Footer() {
  return (
    <div className='mt-10 relative text-white flex flex-col items-center justify-start  w-full h-[200px] border-t-2 border-t-cor-blueTheme'>
      <p className='mt-5 flex flex-col items-center justify-center w-[50%] text-center'>
        <span className='mb-5'>
          JRScode cria aplicações web e mobile buscando facilitar a vida das pessoas
          e o dia a dia das empresas.
        </span>
        Nossa Missão: Criar solucões, melhorar experiência, propocionar resultados, levando
        a pocibilidade de pequenos, medíos e grandes negócios pernamecer vivos na era digital.
      </p>

      <h4 className='absolute bottom-4'>copyright, all reseved ®JRScode 2023. </h4>

    </div>
  )
}

export default Footer