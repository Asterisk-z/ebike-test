import React from 'react';
import styledComponents from 'styled-components';
import SideImg from '../images/headdots.png';
import Lottie from 'react-lottie';
import Biker from '../lotties/biker.json';
import { FaSearch } from 'react-icons/fa';

const Container = styledComponents.div`
  // padding-left: 267px;
  // padding-right: 267px;
`;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Biker,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Header = () => {



  return (
      <Container>
        
        
        <img src={SideImg} alt="side design" />
        

        <main>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p className="intro-heading mb-4">
                  Your Bike <br/>
                  Electric Update
                </p>

                <p className="intro-text my-2">
                  Dummy text progressive, and affordable <br/> healthcare, accessible on mobile and online <br/> for everyone.
                </p>

                <form className="form mt-5">
                  <FaSearch className='search-icon' />
                  <input className="search" type="search" placeholder="Search Bikes or anything"  />
                  <input type="button" className="btn button px- text-center" value="Find" />
                </form>
              </div>
              <div className="col-6">
                <div className="svg">
                  <div id="svg">
                      <Lottie  options={defaultOptions} width={300} height={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </Container>
  )
}

export default Header