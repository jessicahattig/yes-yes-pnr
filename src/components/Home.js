import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <div className='ComponentHeader'>
    <h4>Discover the vision for the future</h4>
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
          <br></br>
          <h2>To Fund The Replacement of the Community Pool & </h2>
          <h2>Invest in Parks, Trails, and Recreation</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="littleballer.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='slide2'>
            <h2>Obtain Financing to Build a New Community Center.</h2>
            <p>Over 3,200 individuals, including both youth and adults, enrolled in HRVPRD recreation programs in 2023.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="natural.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='slide3'>
            <h2>Support the Ongoing Preservation of Our Natural Environment</h2>
            <p>Since 2020, we've successfully secured 34 acres of parkland for preservation, development, and trail connections. With your support, we aim to continue preserving more.</p>

            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Home;
