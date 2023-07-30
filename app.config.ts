import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'expotamagui',
  slug: 'expotamagui',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './public/images/icon.png',
  scheme: 'expotamagui',
  userInterfaceStyle: 'automatic',
  jsEngine: 'hermes',
  splash: {
    image: './public/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.expotamagui.expotamagui',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './public/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.expotamagui.expotamagui',
  },
  web: {
    bundler: 'metro',
    // output: 'static',
    favicon: './public/favicon.png',
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          kotlinVersion: '1.8.0',
        },
      },
    ],
    'expo-router',
  ]
});
