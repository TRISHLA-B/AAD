import React from 'react'
import ZIVA from './../assets/ziva.png'
import './Header.css'
import { FaUser ,FaLock} from "react-icons/fa";
const Header = () => {
  return (
    <div className='sweet'>
    <img src={ZIVA} style={{ width: '200px', height: '40px',marginLeft: '-1050px',marginTop:'-10px' }}  alt=''/>
    <h2 className='lohead' style={{ marginTop: '-45px',fontFamily: 'Brush Script MT, Cursive' }}> Login</h2>
    <FaUser  style={{  position: 'absolute', top: '50px', left: '950px' }} />
    </div>
  )
}

export default Header
