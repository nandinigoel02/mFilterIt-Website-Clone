import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// import {Navbar,av,NavDropdown,Button } from 'react-bootstrap';
 
function NavBar() {
  return (
    <Navbar sticky="top" className="nav centers" expand="lg">
     
        <Navbar.Brand href="#"><img src='https://mfilterit-website.vercel.app/logo.png' alt='mFilterIt'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5 mb-2 mb-lg-0 me-0">
            
          <NavDropdown className='color last mx-3 mt-2' title="Solutions" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ad Traffic Validation</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
          Brand Hygiene Protection
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Ecommerce Competitive Analytics</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">
          Account Takeover Protection
          </NavDropdown.Item>
        </NavDropdown>

        
        <NavDropdown className='color last mx-3 mt-2' title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Case Studies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reports</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='color last mx-3 mt-2' title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Newsroom & Media
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='color last mx-3 mt-2' href="#contact">Contact</Nav.Link>

            <Nav.Link className='color last ms-3 me-5 mt-2' href="#career">Career</Nav.Link>

            <Button variant="light" size="lg" className='design btnStyle ms-5 me-3 my-2'>Get In Touch</Button>
            <Button variant="light" size="lg" className='btnStyle btnColor ms-5 me-3 my-2'>Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

export default NavBar






// <nav class="navbar sticky-top navbar-expand-lg nav">
//   <div class="container-fluid centers">
//     <img src='https://mfilterit-website.vercel.app/logo.png' alt='mFilterIt'></img>
//     <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="navbar-collapse collapse show flex" id="navbarSupportedContent">
//       <ul class="navbar-nav ms-5 mb-2 mb-lg-0 me-0 widset">
//       <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle color last mx-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//         Solutions
//       </a>
//       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <li><a class="dropdown-item" href="#">Ad Traffic Validation</a></li>
//         <li><a class="dropdown-item" href="#">Brand Hygiene Protection</a></li>
//         <li><a class="dropdown-item" href="#">Ecommerce Competitive Analytics</a></li>
//         <li><a class="dropdown-item" href="#">Account Takeover Protection</a></li>
//       </ul>
//      </li>

//       <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle color last mx-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//         Resources
//       </a>
//       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <li><a class="dropdown-item" href="#">Blogs</a></li>
//         <li><a class="dropdown-item" href="#">Case Studies</a></li>
//         <li><a class="dropdown-item" href="#">Reports</a></li>
//       </ul>
//      </li>
        
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle color last mx-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             About
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Company</a></li>
//             <li><a class="dropdown-item" href="#">Newsroom & Media</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active color last mx-4" aria-current="page" href="#">Contact</a>
//         </li>

//         <li class="nav-item">
//           <a class="nav-link active color last mx-4" aria-current="page" href="#">Career</a>
//         </li>
//       </ul>

//       <ul class="navbar-nav ms-lg-4 ms-xl-0 mb-2 mb-lg-0 me-xxl-5">
//       <li class="nav-item tryy">
//       <button type="button" class="btn btn-light ms-0 me-3 btnStyle btnColor">Get In Touch</button>
//       </li>
//       <li class="nav-item">
//       <button type="button" class="btn btn-light ms-3 me-6 btnStyle">Sign In</button>
      
//       </li>
//       </ul>
//     </div>
//   </div>
// </nav>
