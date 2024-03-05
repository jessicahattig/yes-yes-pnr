import { useEffect } from "react";

const Translate = () => {

  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    // const googleTranslateElementInit = () => {
    //   if (window.google && window.google.translate) {
    //     new window.google.translate.TranslateElement(
    //       {
    //         pageLanguage: "en",
    //         autoDisplay: false
    //       },
    //       "google_translate_element"
    //     );
    //   }
    // };
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // return () => {
    //   document.body.removeChild(addScript);
    //   delete window.googleTranslateElementInit;
    // };
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  );
};

export default Translate;
