import React from 'react';
import styledComponents from 'styled-components';
import BikeImage from '../images/other-bikes.png';


const Container = styledComponents.div`
    // padding-left: 267px
`;

const BikeTypes = () => {



  return (
      <Container className='padding-l-267'>
        
                

        <section className="other-bikes my-5">
            <div className="container">
                <div className="other-bikes-header my-5">
                    Other Type Of Bikes
                </div>
                <div className="row box text-center">
                    <div className="col-2 single-bike">
                        <div className="img-box active-box">
                            <img src={BikeImage} alt="Hybrid Bikes" />
                        </div>
                        <div className="bike-names active-text">Hybrid Bikes</div>
                    </div>

                    <div className="col-2 single-bike">
                        <div className="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div className="bike-names">Fixie Bikes</div>
                    </div>

                    <div className="col-2 single-bike">
                        <div className="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div className="bike-names">Folding Bikes</div>
                    </div>

                    <div className="col-2 single-bike">
                        <div className="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div className="bike-names">Mount Bikes</div>
                    </div>

                    <div className="col-2 single-bike faded">
                        <div className="img-box">
                            <img src={BikeImage} alt="" />
                        </div>
                        <div className="bike-names">City Bikes</div>
                    </div>

                </div>
            </div>
        </section>

 

      </Container>
  )
}

export default BikeTypes