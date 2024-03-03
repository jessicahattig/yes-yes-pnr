import React from 'react';

const Contact = () => {
  const recipientEmail = 'jessicahattig@gmail.com'; // Replace with PAC email address.

  const handleEmailLinkClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  return (
    <div className="ComponentHeader">
      <div className="ContactContainer">
        <div className="TextContainer">
          <p>
            If you have any questions or concerns, please{' '}
            <span className="EmailLink" onClick={handleEmailLinkClick}>
              contact us
            </span>
            .
          </p>
        </div>
        <div className="ImageContainer">
          <img
            src="./soccer.png"
            alt="Contact Us"
            className="ContactImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
