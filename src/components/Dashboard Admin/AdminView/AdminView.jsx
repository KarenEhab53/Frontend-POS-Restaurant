import React from 'react'
import Navbar from "../Navbar/Navbar"
import Products from '../Products/Products'
import Orders from '../Orders/Orders'
import Sidebar from '../Sidebar/Sidebar'



export default function AdminView() {
  return (
   
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      

      <div style={{ width: '250px', backgroundColor: '#fff' }}>
        <Sidebar />
      </div>

      <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
        

        <Navbar />

        <div className="p-4">
          <Orders />
         
        </div>

      </div>

    </div>
  )
}
