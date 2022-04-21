import React from 'react';
import Logo from '../images/logo.png';

const Navigation = () => {
  return (
     <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container py-3">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="logo" />
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <a className="nav-link active" aria-current="page" href="#">Product</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Bike Type</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        
        </div>
        
    </div>

  )
}

export default Navigation