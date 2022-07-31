import React from 'react'
import '../App.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Clients from '../components/Clients';
import Impact from '../components/Impact';
import Services from '../components/Services';
import Why from '../components/Why';
import Company from '../components/Company';
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Solutions from '../components/Solutions';
function Landing() {
  return (
    <div className="App">
    
      <NavBar />
      
      
      <Home />
      
      <div className='colors'>
      <Clients />
      </div>
      
      <Impact />
      
      <div className='solBox'>
      <Solutions />
      </div>
      <div className='serBox'>
      <Services />
      </div>
      <div className='bgclr'>
      <Why />
      </div>
      <div className='comp'>
      <Company />
      </div>
      <div className='foot'>
      <Footer />
      </div>
    </div>
  )
}

export default Landing