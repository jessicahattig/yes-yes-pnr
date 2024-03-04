import React from 'react';
import useGoogleTranslateScript from './useGoogleTranslateScript';

const Translate = () => {
    useGoogleTranslateScript();

    return (
        <>
            <div id="google_translate_element"></div>
        </>
    );
};

export default Translate;
