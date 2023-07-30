// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {isCSSEnabled: true});

// Expo 49 beta issue - can be removed at a later date
// https://github.com/expo/expo/issues/23180
config.resolver.sourceExts.push('mjs', 'module.js');

module.exports = config;
