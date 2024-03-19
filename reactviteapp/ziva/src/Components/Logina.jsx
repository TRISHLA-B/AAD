import React from 'react';
import './Login.css';
import { FaUser ,FaLock} from "react-icons/fa";

import { Link } from 'react-router-dom';
import Header from './Header';




const Logina = () => {
  
  return (
   
   <div className='wrapper'>
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
   <Link to='/dashboarda'>
   <button type='submit'>Login</button></Link>
   
   </form>
   </div>
   
  
  );
};

export default Logina;