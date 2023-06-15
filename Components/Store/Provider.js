import Context from './Context';
import { useState, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import RNBootSplash from 'react-native-bootsplash';
import { useTranslation } from 'react-i18next';

import { AuthenLocal } from '../../Service/AuthLocal';
import { COLORS } from '../Color/color';

function Provider({ children }) {
    const { i18n } = useTranslation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState(false);
    const [checkUpload, setCheckUpload] = useState(false);
    const [color, setColor] = useState(COLORS.dark);

    const handleColor = (isLight) => {
        setColor(isLight ? COLORS.light : COLORS.dark)
    }

    const handleLanguage = () => {
        setLanguage(!language);
        if (language) i18n.changeLanguage('en');
        else i18n.changeLanguage('vi');
    };

    const state = {
        isLoggedIn,
        setIsLoggedIn,
        checkUpload,
        setCheckUpload,
        isLoading,
        setIsLoading,
        handleColor,
        color,
        handleLanguage,
        language,
    };

    useEffect(() => { 
        const init = async () => { 
            const credentials = await Keychain.getGenericPassword(); 
            if (credentials) { 
                setIsLoggedIn(true); 
                AuthenLocal(); 
            } else { 
                setIsLoggedIn(false); 
            }
        };

        init().finally(async () => {
            await RNBootSplash.hide({ fade: true, duration: 500 });
        });
        
    }, []);

    return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default Provider;
