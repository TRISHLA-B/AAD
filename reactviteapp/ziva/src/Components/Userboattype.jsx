import React from 'react';
import './Userboattype.css';
import { Link } from 'react-router-dom';
import ybaothouse from './../assets/yercaudboathouse.jpg';
import cruise from './../assets/cruise.jpg'
import row from './../assets/row.jpg'
import  abcboat from'./../assets/abcboat.jpg'
import Header from './Header';

const Userboattype = () => {
  return (
    <div className='boat-type-container'>
    <Header/>
      <div className='bookwraps'>
      <img src={ybaothouse} style={{width:'420px',height:'236px'}} alt=''/> 
      <div className='booknowbut'>
      <Link to='/userbook' >
        <button className='bobut'>BOOK NOW</button>
      </Link>
      </div>
      
      </div>
      <div className='bookwraps1'>
        <img src={cruise}  style={{width:'420px',height:'236px'}} alt=''/> 
        <div className='booknowbut'>
        <Link to='/userbook' >
          <button className='bobut'>BOOK NOW</button>
        </Link>
        </div>
      </div>
      <div className='bookwraps2'>
      <img src={row}  style={{width:'420px',height:'236px'}} alt=''/> 
      <div className='booknowbut'>
      <Link to='/userbook' >
        <button className='bobut'>BOOK NOW</button>
      </Link>
      </div>
      </div>
      <div className='bookwraps3'>
      <img src={abcboat} style={{width:'420px',height:'236px'}}alt=''/> 
      <div className='booknowbut'>
      <Link to='/userbook' >
        <button className='bobut'>BOOK NOW</button>
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Userboattype;