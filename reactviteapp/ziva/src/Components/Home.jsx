import React, { useState, useEffect } from 'react'; 
import Header from './Header'
import boathouse from './../assets/boathouse.png'
import boathouse2 from'./../assets/boathouse2.png'
import boathouse3 from'./../assets/boathouse3.png'
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
      <img src={images[currentImageIndex]} style={{ width: '800px', height: '500px',marginLeft: '-520px',marginTop:'-10px' }}  alt=''/>
      <div style={{ position: 'absolute', top: '100px', left: '80%', transform: 'translateX(-50%)', backgroundColor: '#f0f0f0', padding: '224px', borderRadius: '5px' }}>
     
      </div>
      <div style={{ position: 'absolute', top: '150px', left: '80%', transform: 'translateX(-50%)', backgroundColor:'orange',width: '400px', height: '150px', borderRadius: '5px' }}>
      <h4 style={{marginTop: '20px'}} >Price Starts At Rs1000</h4>
     
      </div>
      
     
    </div>
  )
}

export default Home
