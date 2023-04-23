import React from 'react'
import { Routes, Route, } from 'react-router-dom'

import Home from '../pages/home/Home'

function AllRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      {/* <Route path='/catalago' element={<Catalagos />}/> */}
    </Routes>
  )
}

export default AllRoutes