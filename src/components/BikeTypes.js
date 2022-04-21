import React from 'react';
import styledComponents from 'styled-components';
import BikeImage from '../images/other-bikes.png';


const Container = styledComponents.div`

`;

const BikeTypes = () => {



  return (
      <Container>
        
                

        <section class="other-bikes my-5">
            <div class="container">
                <div class="other-bikes-header my-5">
                    Other Type Of Bikes
                </div>
                <div class="row box text-center">
                    <div class="col-2">
                        <div class="img-box active-box">
                            <img src={BikeImage} alt="Hybrid Bikes" />
                        </div>
                        <div class="bike-names active-text">Hybrid Bikes</div>
                    </div>

                    <div class="col-2">
                        <div class="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div class="bike-names">Fixie Bikes</div>
                    </div>

                    <div class="col-2">
                        <div class="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div class="bike-names">Folding Bikes</div>
                    </div>

                    <div class="col-2">
                        <div class="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div class="bike-names">Mount Bikes</div>
                    </div>

                    <div class="col-2 faded">
                        <div class="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div class="bike-names">City Bikes</div>
                    </div>

                </div>
            </div>
        </section>

 

      </Container>
  )
}

export default BikeTypes