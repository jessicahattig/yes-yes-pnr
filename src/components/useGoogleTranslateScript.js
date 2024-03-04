import { useEffect } from 'react';

function useGoogleTranslateScript() {
    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute(
            'src',
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    autoDisplay: true,
                },
                'google_translate_element'
            );
        };

        return () => {
            document.body.removeChild(addScript);
            delete window.googleTranslateElementInit;
        };
    }, []);
}

export default useGoogleTranslateScript;
