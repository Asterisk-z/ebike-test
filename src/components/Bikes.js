import React from 'react';
import styledComponents from 'styled-components';
import BikeImage1 from '../images/productbike-1.svg';
import BikeImage2 from '../images/productbike-2.svg';
import BikeImage3 from '../images/productbike-3.svg';
import LeftArrow from '../images/left-arrow.png';
import RightArrow from '../images/right-arrow.png';



const Container = styledComponents.div`

`;

const Bikes = () => {



  return (
      <Container>
        
                
        <section className="bikes my-5">
            <div className="container">
                <div className="row mr--10">
                    <div className="col-12 pl-7">
                        <div className="row bike-section">
                            <div className="col-3 bike-box">
                                <div className="bike-name">
                                    Universal eBike Kit
                                </div>
                                <div className="bike-img">
                                    <img src={BikeImage1} alt="Universal eBike Kit" className='product-image-1'/>
                                </div>
                                <div className="bike-sale mt-2">
                                    <div className="price">
                                        <p>Price</p>
                                        <p className="dollars">$750.00</p>
                                    </div>
                                    <div className="order">
                                        <input className="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 bike-box">
                                <div className="bike-name">
                                    Brampoton eBike Kit
                                </div>
                                <div className="bike-img">
                                    <img src={BikeImage2} alt="Universal eBike Kit"  className='product-image-2' />
                                </div>
                                <div className="bike-sale mt-2">
                                    <div className="price">
                                        <p>Price</p>
                                        <p className="dollars">$750.00</p>
                                    </div>
                                    <div className="order">
                                        <input className="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 bike-box faded">
                                <div className="bike-name">
                                    Additional eBike Kit
                                </div>
                                <div className="bike-img">
                                    <img src={BikeImage3} alt="Universal eBike Kit"  className='product-image-3' />
                                </div>
                                <div className="bike-sale mt-2">
                                    <div className="price">
                                        <p>Price</p>
                                        <p className="dollars">$250.00</p>
                                    </div>
                                    <div className="order">
                                        <input className="button" type="button" value="Order" />
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="container my-5 padding-lr-267">
                <div className="row">
                    <div className="col-12 arrows">
                        <button className="left-arrow mx-3">
                            <img src={LeftArrow} alt="" />
                        </button>
                        <button className="right-arrow">
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