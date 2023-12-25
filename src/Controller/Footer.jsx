import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="container">
        <div className="row">
            <div className=" card col-md-12 card-body">
                 <h1 className='fs-1 fw-bold text-uppercase '>Shop Appl</h1>
            </div>
            <div className="card col-md-12  card-body">
                <ul className='text-decoration-none fs-4 fw-bold '>
                    <li >
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link>about</Link>
                    </li>
                    <li>
                        <Link>service</Link>
                    </li>
                    <li>
                        <Link>contact</Link>
                    </li>
                </ul>
            </div> 
            <div className="col-md-12"></div>
            <div className="col-md-12"></div>
        </div>
    </div>
  )
}

export default Footer
