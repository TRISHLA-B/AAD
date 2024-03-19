import React from 'react'
import  { FaUser,FaUsers } from "react-icons/fa";
import { FaSailboat,FaAddressCard } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import './Userbook.css'
import Header from './Header';
const Userbook = () => {
  return (
  
   
    <div className='bookwrap'>
    <Header/>
    <form action=''>
    <h1> Booking Details</h1>
       <div className='box1'>
       <input type='text' placeholder='UserName' required/>
       <FaUser className='icon'/>
        </div>
    <div className='box1'>
    <select required>
            <option value='' style={{color:' black'}}>Boat Name</option>
            <option value='Type 1' style={{color:' black'}}>Type 1</option>
            <option value='Type 2' style={{color:' black'}}>Type 2</option>
            </select>
    <FaSailboat  className='icon'/>
    </div>
    <div className='box1'>
       <input type='text' placeholder='UserID' required/>
       <FaUsers className='icon'/>
        </div>
        <div className='box1'>
       <input type='text' placeholder='Address' required/>
       <FaAddressCard className='icon'/>
        </div>
        <div className='box1'>
       <input type='number' placeholder='No Of Persons' required/>
       <FaUsers className='icon'/>
        </div>
        <div className='box1'>
       <input type='date' placeholder='From' required/>
       <BsCalendar2DateFill className='icon'/>
        </div>
        <div className='box1'>
       <input type='date' placeholder='To' required/>
       <BsCalendar2DateFill className='icon'/>
        </div>
    
    <button type='submit'>Sumbit</button>
   
    </form>
    </div>
    
  )
}

export default Userbook