import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
    <div className='topic'>
    <h4>© 2021 mFilterIt. All Rights Reserved.</h4>
    </div>
    <div className='row container ms-5 idk'>
    <div className='col-2 mx-5'>
    <h4>Resources</h4>
    <ul>
    <li>Blogs</li>
    <li>Case Studies</li>
    <li>Reports</li>
    </ul>
    </div>
    <div className='col-2 mx-5'>
    <h4>Solution</h4>
    <ul>
    <li>Ad Traffic Validation</li>
    <li>Brand Hygiene Protection</li>
    <li>Ecommerce Competitive Analytics</li>
    <li>Account Takeover Protection</li>
    </ul>
    </div>
    <div className='col-2 mx-5'>
    <h4>About</h4>
    <ul>
    <li>Company</li>
    <li>Newsroom & Media</li>
    </ul>
    </div>
    <div className='col-2 ms-4'>
    <h4>Sign Up For Our Newsletter</h4>
    <form className='res'>
    <input type='email' name='email' placeholder='Email Address'></input>
    <button className='btn p-0 col-5 butn' type='submit'><b>SUBSCRIBE</b></button>
    </form>
    <div className='follow'>Follow Us</div>
    <div className='flexible mar'>
    <img href='https://www.linkedin.com/company/mfilterit/' src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1657795153~hmac=62282cfc2f369acb20a3127554affbd0' />
    <img href='https://www.facebook.com/mFilterIt/' src='https://cdn.icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png' />
    <img href='https://twitter.com/mFilterIt' src='https://cdn-icons-png.flaticon.com/512/733/733579.png' />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer