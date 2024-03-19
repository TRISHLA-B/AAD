import React from 'react'
import ZIVA from './../assets/ziva.png'
import {Link} from "react-router-dom"
import './Header.css'
import { FaUser , FaPhoneAlt} from "react-icons/fa";
const Header = () => {
  return (
    <div className='sweet'>
    <img src={ZIVA} style={{ width: '200px', height: '40px',marginLeft: '-1050px',marginTop:'-10px' }}  alt=''/>
    <h2 style={{ marginTop: '-30px', marginLeft: '520px', fontFamily: 'Brush Script MT, Cursive' }}>
    
  <Link to="/login" style={{ textDecoration: 'none',color:'white' }}>Login</Link>
</h2>
<FaUser  style={{  position: 'absolute', top: '65px', left: '950px' }} />
<h2 style={{ marginTop: '-35px', marginLeft: '780px', fontFamily: 'Brush Script MT, Cursive' }}>
    
  <Link to="/contact" style={{ textDecoration: 'none',color:'white' }}>Contact Us</Link>
</h2>
<FaPhoneAlt  style={{  position: 'absolute', top: '66px', left: '1100px' }} />

    </div>
    
  )
}

export default Header
