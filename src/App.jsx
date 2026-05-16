import React from 'react'
import Product from './pages/Product'
import Footer from './component/Footer'
import Header from './component/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Ordersys from './pages/Ordersys'
import Zerodelivery from './pages/zerodelivery'

function App() {
  return (
    <>
    
    <Header/>
    <Routes>
     <Route path='/' element={<Product/>}/>
     <Route path='/Blogs' element={<Blogs/>}/>
     <Route path='/Ordering-System' element={<Ordersys/>}/>
     <Route path='/Login' element={<Login/>}/>
      <Route path='/contact' element={<Zerodelivery/>}/>  
    </Routes>
     
     
    <Footer/>
    </>
    
  )
}

export default App
