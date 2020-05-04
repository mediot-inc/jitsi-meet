// @flow

import { NativeModules } from 'react-native';

/**
 * The singleton language detector for React Native which uses the system-wide
 * locale.
 */
export default {
    /**
     * Does not support caching.
     *
     * @returns {void}
     */
    cacheUserLanguage: Function.prototype,

    detect() {
        const { LocaleDetector } = NativeModules;

        if (
            // android
            LocaleDetector.locale === 'zh_TW_#Hant'

            // ios
            || LocaleDetector.locale === 'zh-Hant-TW'
        ) {
            return 'zhTW';
        }

        return LocaleDetector.locale.replace(/_/, '-');
    },

    init: Function.prototype,

    type: 'languageDetector'
};
