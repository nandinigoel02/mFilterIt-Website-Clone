import React from 'react'
import './Impact.css';

function Impact() {
  return (
    <div className='container'>
    <div className='row text-center head'>
    <h2>Impact</h2>
    </div>
    <div className='space'>
    <div className='row just'>
    <div className='col card col-lg-5 col-6 col-md-6 me-3 my-5 height'>
    <div className="card-body pad">
    <h3 className="card-title text-center">3<span> Billion</span></h3>
    <p className='text-center marg'>Unique Device Coverage</p>
    </div>
    </div>
    <div className='col card col-lg-5 col-6 col-md-6 ms-3 my-5 height'>
    <div class="card-body pad">
    <h3 class="card-title text-center">2<span>+ Billion</span></h3>
    <p className='text-center marg'>Ad Transactions Validated Weekly</p>
    </div>
    </div>
    </div>

    <div className='row just'>
    <div className='col card col-lg-5 col-6 col-md-6 me-3 my-5 height'>
    <div className="card-body pad">
    <h3 className="card-title text-center">30<span>%</span></h3>
    <p className='text-center marg'>Average RAOAS Improvement</p>
    </div>
    </div>
    <div className='col card col-lg-5 col-6 col-md-6 ms-3 my-5 height'>
    <div class="card-body pad">
    <h3 class="card-title text-center">400<span>+ Million</span></h3>
    <p className='text-center marg'>Saved for Clients</p>
    </div>
    </div>
    </div>
    </div>

    <div className='row btn'>
    <button type="button" class="btn btn-lg colorButton">Know More</button> 
    </div>

    </div>
  )
}

export default Impact