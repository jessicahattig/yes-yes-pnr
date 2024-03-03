import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Translate = () => {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Helmet>
      <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" type="text/javascript" async />
    </Helmet>
  );
};

export default Translate;
