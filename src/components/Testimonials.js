import React from 'react';
import styledComponents from 'styled-components';
import Dots from '../images/testdots.png';
import Athlete from '../images/athlete.png';
import Arrow from '../images/arrow.png';
import SlideDots from '../images/slider.png';


const Container = styledComponents.div`

`;

const Testimonials = () => {



  return (
      <Container>
        
                

        <section class="">
            <div class="container">
                <div class="row customers">
                    <div class="col-12 top-design">
                        <img src={Dots} alt="" />
                    </div>
                    <div class="col-12 reviews my-3">
                          What our customers are saying
                          <span></span>
                    </div>

                    <div class="col-12 profile">
                        <div class="profile-info">
                            <div class="profile-img">
                                <img src={Athlete} alt="athlete" />
                            </div>
                            <div class="profile-name">Edward Newgate</div>
                            <div class="profile-title">Pro-Cycler</div>
                        </div>
                        <div class="profile-text">
                            Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="carousel">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                    <img class="mx-5" src={SlideDots} alt="" />
                    <button type="submit" class="slider-button">
                        <img  src={Arrow} alt="" />
                    </button>
                    </div>
                </div>
            </div>
        </section>

 

      </Container>
  )
}

export default Testimonials