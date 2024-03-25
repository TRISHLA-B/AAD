import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleLoginForm from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userbook from './Components/Userbook'
import Userboattype from './Components/Userboattype'
import Adminboatdetails from './Components/Adminboatdetails'
import Dashboarda from './Components/Dashboarda'

import ContactUs from './Components/ContactUs'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Register from './Components/Register'
import La from './Components/Loginas'
import Logina from './Components/Logina'
import Payment from './Components/Payment'


function App() {


  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/login" element={<SimpleLoginForm/>}></Route>
    <Route path='/userbook' element={<Userbook/>}></Route>
    <Route path='/userbtype' element={<Userboattype/>}></Route>
    <Route path='/adminboatdetails' element={<Adminboatdetails/>}></Route>
    <Route path="/dashboarda" element={<Dashboarda/>}></Route>
    <Route path='/sidebar' element={<Sidebar/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/loginas' element={<La/>}></Route>
    <Route path='/logina' element={<Logina/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    </Routes></BrowserRouter>
    </div>
  )
}

export default App
