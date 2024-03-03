import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Events from "./Events";

function Home() {
  return (
    <div>
    <div className='ComponentHeader'>
    <h4>Discover the vision for the future.</h4>
    </div>
      <Carousel interval={4500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="aerialphoto.png"
            alt="First slide"
          />
          <Carousel.Caption>
          <h1>VOTE YES-YES</h1>
          <h2>on May 2024 Ballot </h2>
          <h2>Capital Bond and Operation Levy Measures</h2>
          <br></br>
          <h1>Invest in Parks, Trails, and Recreation</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="damagedPool.png"
            alt="Two slide"
          />
          <Carousel.Caption>
            <div className='slide2'>
            <h2>Secure funding to renew our aging community pool.</h2>
            </div>
          </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="littleballer.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='slide3'>
            <h2>Obtain financing to build a new community center.</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="natural.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <div className='slide4'>
            <h2>Support the ongoing preservation of our natural environment</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Events />
      </div>
  );
}

export default Home;


// <br></br>
// <h2>To Fund The Replacement of the Community Pool & </h2>
// <h2>Invest in Parks, Trails, and Recreation</h2>