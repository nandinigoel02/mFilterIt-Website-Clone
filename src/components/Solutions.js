import React from 'react'
import './Solutions.css';
import Accordion from 'react-bootstrap/Accordion';

function Solutions() {
  return (
    <div className='container box'>
      <div className='heading'>
        <h2>Solutions</h2>
      </div>
      <div className='row flex'>
      <div className='col-6 image'>
      <img src='https://mfilterit-website.vercel.app/bulb1.png' alt='BULB'></img>
      </div>
      <div className='col-6 mt-5 pt-5'>

      <Accordion flush className='mt-5'>
      <Accordion.Item eventKey="0" className='my-5'>
        <Accordion.Header>Ad Traffic Validation</Accordion.Header>
        <Accordion.Body className='bodyText'>
        Unleash the power of machine learning, artificial intelligence & data science to track your marketing campaigns on a real-time basis to differentiate a genuine engagement from that of fake. mFilterIt’s Ad fraud detection solution provides deterministic Ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='my-5'>
        <Accordion.Header>Brand Hygeine Protection</Accordion.Header>
        <Accordion.Body className='bodyText'>
        Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues. The powerful deep penetrating algorithms shield web & app assets of a brand and keep a detailed eye across the digital domain using open-source intelligence to report any brand deviations in real-time & to enforce brand integrity.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='my-5'>
        <Accordion.Header>Ecommerce Competitive Analytics</Accordion.Header>
        <Accordion.Body className='bodyText'>
        Map your brand to the E-Commerce landscape to enhance market share with real-time market intelligence. mFilterIt’s Ecommerce Competitive Analytics solution provides advanced technological capabilities by conducting a gap analysis to analyze your competitive landscape & product category. The solution provides highly specialized actionable insights to counter your competitors and their activities and ensures your business grows exponentially.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='my-5'>
        <Accordion.Header>Account Takeover Protection</Accordion.Header>
        <Accordion.Body className='bodyText'>
        Shield your account from unauthorized access by detecting and blocking automated takeover attacks with the help of a robust set of sources of AI intelligence. Our solution helps mitigate data abuse & malicious activities on your account. The high tech solution bypasses your account and implements advanced countermeasures. The solution tackles vulnerabilities with high fidelity intelligence to secure accounts from cybercrimes & threat attacks.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      </div>
      </div>
    
    </div>
  )
}

export default Solutions