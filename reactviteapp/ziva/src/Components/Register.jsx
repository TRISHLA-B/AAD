import React from 'react';
import './Login.css';
import { FaUser ,FaLock,FaPhoneAlt} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './Register.css';
import { Link } from 'react-router-dom';




const Register = () => {
  
  return (
  
   <div className='wrapper'>
   <form action=''>
   <h1> Sign Up</h1>
      <div className='input-box'>
      <input type='text' placeholder='UserName' required/>
      <FaUser className='icon'/>
       </div>
       <div className='input-box'>
       <input type='number' placeholder='Mobile Number' required/>
       <FaPhoneAlt className='icon'/>
        </div>
        <div className='input-box'>
        <input type='email' placeholder='Email Id' required/>
        <IoMdMail className='icon'/>
         </div>
   <div className='input-box'>
   <input type='password' placeholder='Password' required/>
   <FaLock className='icon' />
   </div>
   
   <Link to='/login'>
   <button type='submit'>Register</button></Link>
   
   </form>
   </div>
  
  );
};

export default Register;