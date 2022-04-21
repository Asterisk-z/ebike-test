import React from 'react';
import styledComponents from 'styled-components';
import BikeImage from '../images/other-bikes.png';
import Lottie from 'react-lottie';
import Rider from '../lotties/biker-on-bike.json';

const Container = styledComponents.div`
    // padding-left: 267px;
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
        
                

            <section className="hybrid-bike padding-l-267">
                <div className="container">
                    <div className="row hybrid-container">
                        <div className="col-4 rider-box">
                            <div className="bike-img">
                                <div id="bike-svg">
                                    <Lottie options={RidingBiker} width={242} height={230}  className="rider"/>
                                </div>
                            </div>
                            <div className="bike-sale mt-4">
                                <div className="price">
                                    <p>Price</p>
                                    <p className="dollars">$750.00</p>
                                </div>
                                <div className="order">
                                    <input className="button" type="button" value="Order" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 hybrid-rider px-5">
                            <div className="hybrid-bike-header">
                                Hybrid Bikes
                            </div>
                            <div className="hybrid-bike-text">
                                Dummy Text Progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride <br/> in the solutions we deliver.
                            </div>
                            <button className="hybrid-bike-button"> Learn more</button>
                        </div>
                    </div>
                </div>
            </section>

 

      </Container>
  )
}

export default HybridBikes