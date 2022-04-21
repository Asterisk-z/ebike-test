import React from 'react';
import styledComponents from 'styled-components';
import BikeImage from '../images/other-bikes.png';
import Lottie from 'react-lottie';
import Rider from '../lotties/biker-on-bike.json';

const Container = styledComponents.div`

`;

const RidingBiker = {
    loop: true,
    autoplay: true,
    animationData: Rider,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const HybridBikes = () => {



  return (
      <Container>
        
                

            <section class="hybrid-bike">
                <div class="container">
                    <div class="row hybrid-container">
                        <div class="col-4 rider-box">
                            <div class="bike-img">
                                <div id="bike-svg">
                                    <Lottie options={RidingBiker} width={350} height={332}  class="rider"/>
                                </div>
                            </div>
                            <div class="bike-sale mt-4">
                                <div class="price">
                                    <p>Price</p>
                                    <p class="dollars">$750.00</p>
                                </div>
                                <div class="order">
                                    <input class="button" type="button" value="Order" />
                                </div>
                            </div>
                        </div>
                        <div class="col-4 hybrid-rider">
                            <div class="hybrid-bike-header">
                                Hybrid Bikes
                            </div>
                            <div class="hybrid-bike-text">
                                Dummy Text Progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliever.
                            </div>
                            <button class="hybrid-bike-button"> Learn more</button>
                        </div>
                    </div>
                </div>
            </section>

 

      </Container>
  )
}

export default HybridBikes