import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from "react-slick";
import '../components/back.png';
import back from './back.png';

function Home() {
const strings = []
                
                // var text;
                // text=document.querySelector('p').innerText;
                // document.querySelector('p').innerText="";
                // var wordArray = text.split(' ');
                // var i = 0;
                // const speed = 1000;
                // var INV = setInterval(function()
                // {
                //     if (i >= wordArray.length-1)
                //     {
                //          clearInterval(INV);
                //     }
                //     document.querySelector('p').innerText.push(wordArray[i]+' ');
                //     i ++;
                // }, speed);
                

    // const [para,setPara]=useState('loading');
    // function trying(){
    //     setTimeout(() => {
    //         strings.map((string)=>{
    //             setPara(string)
    //         })
    //     }, 5000);
    // }
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000
    };

  return (
    <div className='home'>
        <h1 className='color sizeb'>We Deliver Digital Integrity Across Platforms</h1>
        <h4 className='color size'>Protects the online reputation of your brand</h4>
        <div className='container box'>
        <div className='fle'>
        <div className='name'>
        <h1>
        <span className='head1'>m</span>
    <span className='head2'>Filter</span>
    <span className='head3'>It</span>
    </h1>
    <div>
    <p className='color'>Powers growth for the world's largest brands,
    Protects brand reputation online,
    Adds trust to digital
    </p>
    </div>
    </div>
    </div>
    <div className='section'>
    <h3>Trusted Over By Forward - Thinking Companies</h3>
    
    <div className='style'>
    <Slider {...settings}>
      <div>
        <img src='https://mfilterit-website.vercel.app/i16.png' class=" h-100 w-auto me-2" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/ic1.png" class="h-100 w-auto mx-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i1.png" class=" h-100 w-auto mx-4"  />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i2.png" class=" h-100 w-auto mx-4"/>
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i17.png" class=" h-100 w-auto me-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i32.png" class="h-100 w-auto mx-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i35.png" class=" h-100 w-auto mx-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i36.png" class=" h-100 w-auto mx-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i16.png" class=" h-100 w-auto me-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/ic1.png" class="h-100 w-auto mx-5" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i1.png" class=" h-100 w-auto mx-4" />
      </div>
      <div>
      <img src="https://mfilterit-website.vercel.app/i2.png" class=" h-100 w-auto mx-4" />
      </div>
    </Slider>
  </div>
   

    </div>
    </div>
    </div>
  )
}

export default Home;




// <div id="carousel" class="carousel slide top" data-bs-ride="carousel">
// <div class="carousel-inner">
//   <div class="carousel-item active flex set">
//     <img src="https://mfilterit-website.vercel.app/i16.png" class=" h-100 w-auto me-4" alt="..."/>
//     <img src="https://mfilterit-website.vercel.app/ic1.png" class="h-100 w-auto mx-5" alt="..."/>
//     <img src="https://mfilterit-website.vercel.app/i1.png" class=" h-100 w-auto mx-4" alt="..."/>
//     <img src="https://mfilterit-website.vercel.app/i2.png" class=" h-100 w-auto mx-5" alt="..."/>
//   </div>
//   <div class="carousel-item flex set">
//   <img src="https://mfilterit-website.vercel.app/i17.png" class=" h-100 w-auto me-4" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/i32.png" class="h-100 w-auto mx-5" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/i35.png" class=" h-100 w-auto mx-4" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/i36.png" class=" h-100 w-auto mx-5" alt="..."/>
//   </div>
//   <div class="carousel-item flex set">
//   <img src="https://mfilterit-website.vercel.app/i16.png" class=" h-100 w-auto me-4" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/ic1.png" class="h-100 w-auto mx-5" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/i1.png" class=" h-100 w-auto mx-4" alt="..."/>
//   <img src="https://mfilterit-website.vercel.app/i2.png" class=" h-100 w-auto mx-5" alt="..."/>
//   </div>
// </div>

// <button class="carousel-control-prev prevcls" type="button" data-bs-target="#carousel" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next nextcls" type="button" data-bs-target="#carousel" data-bs-slide="next">
//   <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
// </div>