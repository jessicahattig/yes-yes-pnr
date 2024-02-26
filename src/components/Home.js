import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <div style={{ marginTop: '50px' }}>
    <h4>Discover the vision for the future</h4>
    </div>
      <Carousel interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="damagedPool.png"
            alt="First slide"
          />
          <Carousel.Caption>
          <h2>Secure Funding to Replace Aging Community Pool</h2>
          <p>Each year, 1,500+ children participate in swim lessons.</p>
          <p>The pool pipes and foundation, aged 76 years, urgently need updates. The pool tent cover has surpassed its expected lifespan by 7-10 years.</p>
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
            <h2>Obtain financing to build a new community center.</h2>
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
            <h2>Help protect the natural environment.</h2>
            <p>34 acres of parkland secured since 2020 for preservation, development, and trail connections. Say yes to securing more.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  );
}

export default Home;
