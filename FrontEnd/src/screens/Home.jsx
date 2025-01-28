import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Navbar.css'
import Footer from '../components/Footer'
import '../css/Footer.css'
import '../css/Home.css'
import heroimg1 from '../assets/hero-1.jpg'
import heroimg2 from '../assets/hero-2.jpg'
import heroimg3 from '../assets/hero-3.jpg'

import cardimg1 from '../assets/Jam.jpg'
import cardimg2 from '../assets/Sap.jpeg'
import cardimg3 from '../assets/Cyb.jpg'

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/Animation.json';

const Home = () => {
  return (
    <div className='full-scr'>
        <Navbar/>




         {/* text look good */}
         <div className="container top-mar">

<div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary flex-con">
  
<div className="col-lg-6 px-0">
<h1 className="display-4 fst-italic">Collcom’s guide, your cyber shield worldwide!</h1>
<p className="lead my-3">We are thrilled to announce the launch of our Cyber Magazine, a dedicated publication aimed at raising awareness about cybercrime and promoting cyber safety practices.</p>
<p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
</div>
<div className="col-10 col-sm-8 col-lg-6 padd-left">
<Player
className="d-block mx-lg-auto img-fluid"
autoplay
loop
src={animationData}
style={{ height: '350px', width: '400px' }}
/>

</div>
</div>
</div>


        
        {/* carousel */}

        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    
    <div className="carousel-inner">
      <div className="carousel-item carousel-item-next carousel-item-start">
        <img src={heroimg3} alt="" className="carousel-img" />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Empowering Citizens Against Cyber Crime</h1>
            
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src={heroimg2} alt="" className="carousel-img" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Empowering Youth Through Capacity Building Training</h1>
            
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active carousel-item-start">
      <img src={heroimg1} alt="" className="carousel-img" />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Sapno Ka School Where Dream Comes True</h1>
            
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


       





        {/* starting page hero landing page */}



        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6 padd-left">
      <Player
        className="d-block mx-lg-auto img-fluid"
        autoplay
        loop
        src={animationData}
        style={{ height: '500px', width: '500px' }}
      />
        {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
      </div>
      <div className="col-lg-6 padd-right">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About <span className='dec-txt'>CollCom</span></h1>
        <p className="lead para-txt">CollCom stands for College Community, is a Non-Profitable organization established in 2018 by alumni of Jawaharlal Nehru University, New Delhi to connect the colleges students with community, engage them in analysng, understanding and building sustaibale solutions on different social issues.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">More About Us</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Call Any Time</button>
        </div>
      </div>
    </div>
  </div>



      {/* What we do */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold text-body-emphasis">What We Do</h1>
    
    
  </div>


      <div className="container carousel slide mb-6" id="myCarousel" data-bs-ride="carousel">

      <div className="row">
      <div className="col-lg-4">
      <div className="card">
        
        <img src={cardimg3} alt="Children smiling"/>
        <div className="card-content">
      
            <p className="title">Cyber Sanskar Project</p>
           
            
        </div>
    </div>
      </div>
      <div className="col-lg-4">
      <div className="card">
        
        <img src={cardimg2} alt="Children smiling"/>
        <div className="card-content">
            
            <p className="title">Sapno Ka School Where Dream Comes True</p>
            
            
        </div>
    </div>
      </div>
      <div className="col-lg-4">
      <div className="card">
        
        <img src={cardimg1} alt="Children smiling"/>
        <div className="card-content">
            <p className="title">Jansamwad Project</p>
        </div>
    </div>
      </div>
    </div>
    </div>




    {/* Download Cyber Sanskar Magazine */}

    <Footer/>
    </div>
  )
}

export default Home