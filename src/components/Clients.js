import React from 'react'
import './Clients.css';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'react-slick';


function Clients() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div className='container box'>
    <div className='heading'>
    <h2>Clients</h2>
    </div>
    <div>
    <Slider {...settings} className="slide">
    <div>
      <img src='https://mfilterit-website.vercel.app/flipkart.png' alt='Flipkart' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/max1.png' alt='Max' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/oyo1.png' alt='Oyo' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/macd.png' alt='Macd' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/biba.png' alt='Biba' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/byjus.png' alt='Byjus' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/walmart.png' alt='Walmart' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/unilever.png' alt='Unilever' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/whitehat.png' alt='WhiteHat' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/hungama.png' alt='Hungama' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/games24.png' alt='Games 24/7' />
    </div>
    <div>
    <img src='https://mfilterit-website.vercel.app/hdfc.png' alt='HDFC' />
    </div>
  </Slider>
    </div>
    </div>
  )
}

export default Clients
