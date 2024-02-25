import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <div style={{ marginTop: '20px' }}>
    <h4>Discover the vision for the future</h4>
    </div>
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
 {/* <ul>
    <li>Capital Bond to build a state-of-the-art pool with a community center</li>
    <li>Funding for the enhancement of parks and trails</li>
    <li>Supported by Operation Levy, ensuring continued support for:</li>
    <ul>
      <li>Recreation programming</li>
      <li>Park services</li>
      <li>Recreation facilities</li>
    </ul>
  </ul>
  <p>Together, these measures will create a vibrant and thriving community space for everyone.</p> */}