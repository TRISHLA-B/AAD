import { React,useState } from 'react';

import './Payment.css'
import { FaUser } from "react-icons/fa";

const Payment = () => {
    const[amount ,setamount]=useState('');
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(amount===""){
            alert("Enter the amount");
        }
        else{
           var options={
            key:"rzp_test_kmHEjSqJeXrSB6",
            key_secret:"3JWtaqbMiuP5Q8DvYsSZsaW2",
            amount:amount*100,
            currency:"INR",
            name:"Ziva Booking",
            description:"For Booking Payment",
            handler:function(response){
                alert(response.razorpay_payment_id);
            },
            prefill:{
               name:"Ziva Booking",
               email:"zivabooking123@gmail.com",
               contact:"9944865066"
            },
            notes:{
                address:"Razorpay Corporate Office"
            },
            theme:{
                color:"#00203FFF"
            }
           };
           var pay=new window.Razorpay(options);
           pay.open();
        }
    }
  return (
    <div >
    <div className='wrapper'  >
    <form action=''>
    <h1> Payment</h1>
       <div className='input-box'>
       <input type='text' placeholder='Amount' value={amount} onChange={(e)=>setamount(e.target.value)} required/>
       <FaUser className='icon'/>
        </div>
        <button type='submit' onClick={handleSubmit}>Sumbit</button>
    
    </form>
    </div>
    </div>
  )
}

export default Payment
