import React from 'react';
import styledComponents from 'styled-components';
import FooterDots from '../images/headdots.png';
import LastDots from '../images/testdots.png';


const Container = styledComponents.div`

`;

const Footer = () => {



  return (
      <Container>
        
                

  <section id="bottom_img">
    <div>
      <img src={FooterDots} alt="" className="bottom_image" />
    </div>
  </section>

  <footer>
    <div className="container footer">
      <div className="row">
        <div className="col-6 footer">
          <div className="footer-logo">
            <span className="me">B </span> 
            <span className="ebike">eBike</span>
          </div>
          <div className="footer-address">
            Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for everyone
          </div>
          <div className="footer-copyright">
            ©eBike 2021. All rights reserved
          </div>
        </div>
        <div className="col-3">
          <div className="lead-text">Company</div>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Bike Type</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-3">
          <div className="lead-text">Help</div>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Contact support</a></li>
            <li><a href="#">Instructions</a></li>
            <li><a href="#">How it works</a></li>
          </ul>
        </div>
      </div>
    </div>
    <img src={LastDots} alt="" className="footerdots"/>
  </footer>
 

      </Container>
  )
}

export default Footer