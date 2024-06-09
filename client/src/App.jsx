import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';


const Home =lazy(()=> import ("./components/Home"))
const Login =lazy(()=> import ("./components/Login"))
const Signup =lazy(()=> import ("./components/Signup"))
const Notfound =lazy(()=> import ("./components/Notfound"))


function App() {


  return (
    <>
   <BrowserRouter >
   <Routes>
   <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />

      <Route path='*' element={<Notfound />}></Route>


   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
