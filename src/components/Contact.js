import React from 'react';

const Contact = () => {
  const recipientEmail = 'jessicahattig@gmail.com'; 
  const handleEmailLinkClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  return (
    <div className="ComponentHeader">
      <p>
        If you have any questions or concerns, please{' '}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleEmailLinkClick}>
          contact us
        </span>
        .
      </p>
    </div>
  );
};

export default Contact;
