import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="your-image-url-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First photo label</h3>
            <p>lorem ipsum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="your-image-url-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second photo label</h3>
            <p>lorem ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
