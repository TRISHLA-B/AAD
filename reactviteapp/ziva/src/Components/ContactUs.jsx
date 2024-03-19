import React from 'react'
import Header from './Header'
import Footer from './Footer'


const ContactUs = () => {
  return (
   
    
    <div>
    <Header/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.7683527895!2d76.8024186291065!3d11.014261487447731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1685030398492!5m2!1sen!2sin" width="1280" height="450" style={{ marginLeft: '-30px' ,marginTop:'100px'}} className='cmap' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
  )
}

export default ContactUs