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
        
                

        <section className="">
            <div className="container">
                <div className="row customers">
                    <div className="col-12 top-design">
                        <img src={Dots} alt="" />
                    </div>
                    <div className="col-12 reviews my-3">
                          What our customers are saying
                          <span></span>
                    </div>

                    <div className="col-12 profile">
                        <div className="profile-info">
                            <div className="profile-img">
                                <img src={Athlete} alt="athlete" />
                            </div>
                            <div className="profile-name">Edward Newgate</div>
                            <div className="profile-title">Pro-Cycler</div>
                        </div>
                        <div className="profile-text">
                            Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="carousel">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                    <img className="mx-5" src={SlideDots} alt="" />
                    <button type="submit" className="slider-button">
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