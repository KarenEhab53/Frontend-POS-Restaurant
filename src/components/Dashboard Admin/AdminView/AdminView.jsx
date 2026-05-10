import React from 'react'
import Navbar from "../Navbar/Navbar"
import Orders from '../Orders/Orders'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Ingredients from '../Ingredients/Ingredients'
import Category from '../Category/Category'
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin'
import Products from '../Products/Products'
export default function AdminView() {
  return (
   
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      

      <div style={{ width: '250px', backgroundColor: '#fff' }}>
        <Sidebar />
      </div>

      <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
        

        <Navbar />

        <div className="p-4">
          
         <Routes>
          <Route path='/orders' element={<Orders />} />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/category' element={<Category/>}/>
          <Route path='/' element={<DashboardAdmin/>}/>
          <Route path='/products' element={<Products/>}/>
         </Routes>
        </div>

      </div>

    </div>
  )
}
