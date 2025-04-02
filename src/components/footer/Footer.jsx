import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const WhatsAppButton = () => {
  const phoneNumber = "5573981424418";
  const message = "Gostaria de criar meu site.";
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  return (
    <div className='mt-10 relative text-white flex flex-col items-center justify-start  w-full h-[200px] border-t-2 border-t-cor-blueTheme'>
      <button onClick={openWhatsApp} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
      <FaWhatsapp size={20} /> Entar em contato 
    />

      <h4 className='absolute bottom-4'>copyright, all reseved ®JRScode 2023. </h4>

    </div>
  )
}

export default Footer
