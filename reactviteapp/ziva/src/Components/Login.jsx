import React from 'react';
import './Login.css';
import { FaUser ,FaLock} from "react-icons/fa";

import { Link } from 'react-router-dom';
import Header from './Header';
import bgg from '../assets/allbg.jpg'



const SimpleLoginForm = () => {
  
  return (
   
   <div className='wrapper' style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQAvkLQF8Ki5IbnQF-yUJjbKz0Bl0vVXmGWM36KFVtCYdVMxa4MmZBwT1q32KQiBehog&usqp=CAU')",backgroundSize: 'cover',backgroundPosition:'center',minHeight:'50vh'}} >
   <form action=''>
   <h1> Login</h1>
      <div className='input-box'>
      <input type='text' placeholder='UserName' required/>
      <FaUser className='icon'/>
       </div>
   <div className='input-box'>
   <input type='password' placeholder='Password' required/>
   <FaLock className='icon' />
   </div>
   <div className='remember-forget'>
   <label> <input type='checkbox'/>Remember Me</label>
   <a href='#'>Forgot Password?</a>
   </div>
   <Link to='/userbtype'>
   <button type='submit'>Login</button></Link>
   <div className='register-link'>
   <p> Don't have an account? <Link to='/register'><a herf='#'>Register</a></Link></p>
   </div>
   </form>
   </div>
 
  
  );
};

export default SimpleLoginForm;