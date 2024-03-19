import React from 'react';
import './Login.css';
import { FaUser ,FaLock} from "react-icons/fa";

import { Link } from 'react-router-dom';





const La = () => {
  
  return (
   
   <div className='wrapper'>
   <form action=''>
   <h1> Login As</h1>
      <div className='input-box'>
      <Link to='/login'>
      <button type='submit'>User </button></Link>
      
       </div>
   <div className='input-box'>
   <Link to='/login'>
      <button type='submit'>Admin </button></Link>
   </div>
   
   
   </form>
   </div>
   
  
  );
};

export default La;