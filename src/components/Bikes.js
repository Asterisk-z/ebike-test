import React from 'react';
import styledComponents from 'styled-components';
import BikeImage from '../images/bike3.png';
import LeftArrow from '../images/left-arrow.png';
import RightArrow from '../images/right-arrow.png';



const Container = styledComponents.div`

`;

const Bikes = () => {



  return (
      <Container>
        
                
        <section class="bikes my-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 ml-120">
                        <div class="row bike-section">
                            <div class="col-3 bike-box">
                                <div class="bike-name">
                                    Universal eBike Kit
                                </div>
                                <div class="bike-img">
                                    <img src={BikeImage} alt="Universal eBike Kit" />
                                </div>
                                <div class="bike-sale mt-2">
                                    <div class="price">
                                        <p>Price</p>
                                        <p class="dollars">$750.00</p>
                                    </div>
                                    <div class="order">
                                        <input class="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-3 bike-box">
                                <div class="bike-name">
                                    Brampoton eBike Kit
                                </div>
                                <div class="bike-img">
                                    <img src={BikeImage} alt="Universal eBike Kit" />
                                </div>
                                <div class="bike-sale mt-2">
                                    <div class="price">
                                        <p>Price</p>
                                        <p class="dollars">$750.00</p>
                                    </div>
                                    <div class="order">
                                        <input class="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-3 bike-box faded">
                                <div class="bike-name">
                                    Additional eBike Kit
                                </div>
                                <div class="bike-img">
                                    <img src={BikeImage} alt="Universal eBike Kit" />
                                </div>
                                <div class="bike-sale mt-2">
                                    <div class="price">
                                        <p>Price</p>
                                        <p class="dollars">$250.00</p>
                                    </div>
                                    <div class="order">
                                        <input class="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="container my-5">
                <div class="row">
                    <div class="col-12 arrows">
                        <button class="left-arrow mx-3">
                            <img src={LeftArrow} alt="" />
                        </button>
                        <button class="right-arrow">
                            <img src={RightArrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

 

      </Container>
  )
}

export default Bikes