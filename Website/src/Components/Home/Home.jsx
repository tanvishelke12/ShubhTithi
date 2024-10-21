import React from 'react'

import img1 from '../assets/g9.webp'
import img2 from '../assets/c6.png'
import img3 from '../assets/l1.jpg'
import img4 from '../assets/boy1.mp4'
import img5 from '../assets/Bride1.png'
import img6 from '../assets/next-removebg-preview.png'
import img7 from '../assets/back-removebg-preview.png'
import './Home.css';
import v2 from '../assets/genral1.mp4';
import v3 from '../assets/BrideVideo1.mp4';
import { Button, Container } from 'react-bootstrap';
import { Popular } from '../Popular/Popular'
import { Footer } from '../Footer/Footer'



export const Home = () => {
  return (
    <div>

<div class="container-1">
        <div className="image image1"><img src={img1}  alt="IMG_1"/></div>
        <div className="image image2"><img src={img2}  alt="IMG_2"/></div>
        <div className="image image3"><img src={img3}  height="600px" width="800px" alt="IMG_3"/></div>
      
    </div>
   
<div className="container-2">
      <div className="img1">
     {/* <img src={img4} alt="Example Image"/> */}
     <video src={img4} alt="Example Image" autoPlay muted loop/>
      </div>
      <div className="content-show">
        <h1 className="animate-top">Men's Collections</h1>
        <p className="animate-top">Welcome to the gentlemen's corner! We believe that every man deserves to look and feel his best on such a special day. Whether you're a groom looking to perfect your ensemble or a guest seeking style inspiration, we've got you covered..<br/>
        <br/><b>EXPLORE MORE!!</b><br/>
          <br/>
        </p>
       <a href="#" target="_blank"><img src={img7} width="100px" height="100px"/></a> 
      </div>
    </div>


<div className="container-3">
    <div className="content-show-2">
      <h1 class="animate-top">Women's Attire</h1>
        <p class="animate-top">Welcome to the women's fashion guide, where grace meets glamour! Whether you're the bride, a bridesmaid, or a cherished guest,we're here to help you dazzle on this unforgettable day.
          Your wedding dress is the centerpiece of your bridal ensemble,<br/> but there's so much more to consider!..
          <br/>
          <p/>
          <br/>
          <b>EXPLORE MORE!!</b>
        </p>
        <br/>
       <a href="#" target="_blank"><img src={img6} width="100px" height="100px"/></a> 
    </div>
    <div className="img-2">
        <video src={v3} autoPlay muted loop/>
    </div>
   
    </div>

    
<div id="Container-6">
    <div className="main">
        <video src={v2} autoPlay  muted loop  />
    </div>
    <div className='btn'>
        <Button>EXPLORE MORE!</Button>
    </div>
</div>

<br/>
<div className='container-9' >
<Popular/>
</div>

<div className='container-10' >
<Footer/>
</div>
    </div>
  )
}
