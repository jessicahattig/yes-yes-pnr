import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        {/* Other footer content */}
  
        {/* Instagram icon and link */}
        <a href="https://www.instagram.com/yesyespnr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 10px', color: '#000' }} />
        </a>
                {/* Facebook icon and link
        <a href="https://www.facebook.com/yesyespnr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '0 10px', color: '#000' }} />
        </a> */}

      </div>
      <p>&copy; 2024 Hood River Valley Parks and Recreation District Political Action Committee. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
