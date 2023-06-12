import React from 'react'
import '../css/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (

    <div className='container'>
        <div className='header m-5'>
            <h2 className='text-center'>Explore Our Storage Space, Co-Working Space,</h2>
            <h2 className='text-center'>Co-Warehouse & Services</h2>
            <div className='desc mt-5'>
            <p classname=''>Carefully crafted for hassale-free and affordable experience</p>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                <img src="assets/images/door.jpg" className="d-flex-justify-content-center  door_img card-img-top" alt="..." />
                <div className='door_desc d-flex-justify-content-center'>
                <h5 className='mt-3'>Door to Door</h5>
                <h5 className=''>Storage</h5>
                </div>
                <div className='content_desc mt-3'>
                <p classname=''>We pick up, store and deliver</p>              
               </div>
               <div className='content_link mt-3'>
               <a><Link to='#'>Learn more</Link></a>
               </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-6'>
                <img src="assets/images/self_access.jpg" className="d-flex-justify-content-center  door_img card-img-top" alt="..." />
                <div className='door_desc d-flex-justify-content-center'>
                <h5 className='mt-3'>Self Access</h5>
                <h5 className=''>Storage</h5>
                </div>
                <div className='content_desc mt-3'>
                <p classname=''>We pick up, store and deliver</p>              
               </div>
               <div className='content_link mt-3'>
               <a><Link to='#'>Learn more</Link></a>
               </div>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-6'>
                <img src="assets/images/document1.png" className="d-flex-justify-content-center  door_img card-img-top" alt="..." />
                <div className='door_desc d-flex-justify-content-center'>
                <h5 className='mt-3'>Document</h5>
                <h5 className=''>Storage</h5>
                </div>
                <div className='content_desc mt-3'>
                <p classname=''>We pick up, store and deliver</p>              
               </div>
               <div className='content_link mt-3'>
               <a><Link to='#'>Learn more</Link></a>
               </div>

                </div>

                <div className='col-lg-3 col-md-3 col-sm-6'>
                <img src="assets/images/marketing.jpg" className="d-flex-justify-content-center  door_img card-img-top" alt="..." />
                <div className='door_desc d-flex-justify-content-center'>
                <h5 className='mt-3'>Marketing</h5>
                <h5 className=''>Merchendise</h5>
                </div>
                <div className='content_desc mt-3'>
                <p classname=''>We pick up, store and deliver</p>              
               </div>
               <div className='content_link mt-3'>
               <a><Link to='#'>Learn more</Link></a>
               </div>

                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Home
