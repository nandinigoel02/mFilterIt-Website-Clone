import React from 'react'
import './Company.css';
import Slider from "react-slick";

function Company() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

  return (
    <div className='company'>
    <div className='heading'>
    <h2 className='colored'>You Are In Happy Company</h2>
    </div>

    <div>
    <Slider {...settings} className='sizing'>
      <div>
        <img src='https://mfilterit-website.vercel.app/careem.png'  className="flexi"/>
      </div>
      <div>
      <img src='https://mfilterit-website.vercel.app/adupps.png'  className="flexi"/>
      </div>
      <div>
      <img src='https://mfilterit-website.vercel.app/starz.png'  className="flexi"/>
      </div>
      <div>
      <img src='https://mfilterit-website.vercel.app/pidilite.png' className='seti flexi'/>
      </div>
      <div>
      <img src='https://mfilterit-website.vercel.app/virgin-mobile.png'  className="flexi"/>
      </div>
    </Slider>
  </div>

    </div>
  )
}

export default Company
