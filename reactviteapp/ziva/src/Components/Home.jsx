import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Header from './Header'
import boathouse from './../assets/boathouse.png'
import boathouse2 from'./../assets/boathouse2.jpg'
import boathouse3 from'./../assets/boathouse3.png'
import service2 from'./../assets/service-02.png'
import service3 from'./../assets/service-03.png'
import service4 from'./../assets/service-04.png'


const Home = () => {
    
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const images = [boathouse, boathouse2,boathouse3]; 
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
      
          return () => clearInterval(interval);
        }, []); 
  return (
    <div className='pricestartcard'>
      <Header/>
      <img src={images[currentImageIndex]} style={{ width: '700px', height: '450px',marginLeft: '-500px',marginTop:'100px',borderRadius:'10px' }}  alt=''/>
      <div style={{ position: 'absolute', top: '135px', left: '80%', transform: 'translateX(-50%)', backgroundColor: '#00203FFF', padding: '224px', borderRadius: '5px' }}>
     
      </div>
      <div style={{ position: 'absolute', top: '160px', left: '80%', transform: 'translateX(-50%)', backgroundColor:'white',width: '400px', height: '150px', borderRadius: '10px' }}>
      <h4 style={{marginTop: '10px',color:'black'}} >Price Starts At </h4>
      <h3 style={{color:'black'}}> Rs 1000</h3>
      <p style={{color:'black'}}>(exclusive of all taxes)</p>
      <Link to='/contact'>
      <button style={{marginTop:'20px',width:'150px',height:'40px',backgroundColor:'#00203FFF'}}>INQUIRY</button>
      </Link>
      </div>
      <div style={{ position: 'absolute', top: '630px', left: '51%', transform: 'translateX(-50%)', backgroundColor: '#00203FFF', padding: '20px', borderRadius: '10px', width: '1220px' }}>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(10)].map((_, index) => (
                            <tr key={index}>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ position: 'absolute', top: '1000px', left: '51%', transform: 'translateX(-50%)', backgroundColor: 'white', padding:'30px', borderRadius: '10px', width: '1220px' }}>
            <div style={{marginLeft:'900px'}}>
            <img src={service2} alt='services' />
            <div >
           <h6 style={{color:'#00203FFF'}}>Daily Suprise Offers</h6>
              <p style={{color:'#00203FFF'}}>Save upto 25% off</p>
            </div>
            </div>
            <div style={{marginTop:'-79px',marginLeft:'250px'}}>
            <img src={service3} alt='services' />
            <div >
           <h6 style={{color:'#00203FFF'}}>Daily Suprise Offers</h6>
              <p style={{color:'#00203FFF'}}>Save upto 25% off</p>
            </div>
            </div>
            <div style={{marginRight:'1000px',marginTop:'-75px'}}>
            <img src={service4} alt='services' />
            <div >
           <h6 style={{color:'#00203FFF'}}>Daily Suprise Offers</h6>
              <p style={{color:'#00203FFF'}}>Save upto 25% off</p>
            </div>
            </div>
            <div style={{marginRight:'350px',marginTop:'-80px'}}>
            <img src={service4} alt='services' />
            <div >
           <h6 style={{color:'#00203FFF'}}>Daily Suprise Offers</h6>
              <p style={{color:'#00203FFF'}}>Save upto 25% off</p>
            </div>
            </div>
            </div>
            <div style={{ position: 'absolute', top: '1200px', left: '30%', transform: 'translateX(-50%)', backgroundColor: '#00203FFF', padding:'100px', borderRadius: '10px', width: '600px',height:'100px' }}>
            <h2 style={{ color: '#ffffff',marginTop:'-80px' }}>Amenities</h2>
            <ul style={{ color: '#ffffff', listStyle: 'none', textAlign: 'left', marginTop: '30px' }}>
               <li >Drinking Water</li>
               <li >Restrooms</li>
               <li >Selfie Points</li>
               
              </ul>
              <ul style={{ color: '#ffffff', listStyle: 'none', textAlign: 'center', marginTop: '-73px' }}>
               <li >Restaurants</li>
               <li >Parking Area</li>
               <li >Tea Stalls</li>
    
              </ul>
              <ul style={{ color: '#ffffff', listStyle: 'none', textAlign: 'right', marginTop: '-70px' }}>
               <li >Rescue Boats</li>
               <li >Life Jackets</li>
               <li >Cameras</li>
    
              </ul>
              <div style={{ position: 'absolute', top: '0px', left: '110%', backgroundColor: '#00203FFF', padding:'150px', borderRadius: '10px', width: '400px' }}>
              <h3 style={{ display: 'inline-block', whiteSpace: 'nowrap',}}>Got a Question?</h3>
              <p >Our Destinatin Experts Will be happy to resolve your queries</p>
              </div>
              
            </div>
            
       
     
    </div>
  )
}

export default Home
