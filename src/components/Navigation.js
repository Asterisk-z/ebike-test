import React from 'react';
import Logo from '../images/logo.png';

const Navigation = () => {
  return (
     <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container py-3">
            <a class="navbar-brand" href="#">
                <img src={Logo} alt="logo" />
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-2">
                        <a class="nav-link active" aria-current="page" href="#">Product</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="#">Bike Type</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="#">Testimonials</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        
        </div>
        
    </div>

  )
}

export default Navigation