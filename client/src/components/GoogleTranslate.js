import React, { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    // function googleTranslateElementInit() {
    //   new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }
    const script = document.createElement('script');
    // script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <p>Click on the dropdown button to translate.</p>
      <p>Translate this page:</p> */}
      <div id="google_translate_element"></div>
      {/* <p>Translate The Web Page by Selecting the Selection Box.</p> */}
    </div>
  );
}

export default GoogleTranslate;
