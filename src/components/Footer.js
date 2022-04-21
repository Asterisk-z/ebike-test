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
      <img src={FooterDots} alt="" class="bottom_image" />
    </div>
  </section>

  <footer>
    <div class="container footer">
      <div class="row">
        <div class="col-6 footer">
          <div class="footer-logo">
            <span class="me">B </span> 
            <span class="ebike">eBike</span>
          </div>
          <div class="footer-address">
            Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for everyone
          </div>
          <div class="footer-copyright">
            ©eBike 2021. All rights reserved
          </div>
        </div>
        <div class="col-3">
          <div class="lead-text">Company</div>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Bike Type</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-3">
          <div class="lead-text">Help</div>
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