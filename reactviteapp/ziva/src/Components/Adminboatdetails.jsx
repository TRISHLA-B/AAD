import React from 'react'
import './Adminbd.css'
import { FaSailboat } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra,MdDirectionsBoat } from "react-icons/md";
import { FcAddressBook } from "react-icons/fc";
import { GiFishingBoat } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Header from './Header';

const Adminboatdetails = () => {
  return (
    <>
    <div className='bg'>
    <div className='adminwrapper' >
    <Header/>
    <form action=''>
   <h1> ADD BOAT DETAILS</h1>
      <div className='input-boxx'>
      <input type='text' placeholder='BoatName' required/>
      <FaSailboat className='icon'/>
       </div>
       <div className='input-boxx'>
      <input type='text' placeholder='BoatDescription' required/>
      <GiFishingBoat  className='icon'/>
       </div>
       <div className='input-boxx'>
      <input type='text' placeholder='Boat Address' required/>
      <FcAddressBook className='icon'/>
       </div>
       <div className='input-boxx'>
      <input type='text' placeholder='Boat Avaliable Status' required/>
      <GrStatusGood  className='icon'/>
       </div>
       <div className='input-boxx'>
      <input type='text' placeholder='Boat Image URL' required/>
      <MdDirectionsBoat  className='icon'/>
       </div>
       <div className='input-boxx'>
       <input type='text' placeholder='Price' required/>
       <FaRupeeSign  className='icon'/>
        </div>
        <div className='input-boxx'>
       <input type='number' placeholder='Capacity' required/>
       <MdOutlineAirlineSeatReclineExtra className='icon'/>
        </div>
        <div className='booknowbut'>
        <Link to='/userbook' >
          <button className='bobut'>ADD BOAT</button>
        </Link>
        </div>
       </form>
    </div>
    </div>
    </>
  )
}

export default Adminboatdetails