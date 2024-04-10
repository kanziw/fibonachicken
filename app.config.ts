import type { ConfigContext, ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'kanziw',
  name: 'fibonachicken',
  slug: 'fibonachicken',
  version: '0.9.0',
  orientation: 'portrait',
  icon: './assets/logo512.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.kanziw.fibonachicken',
    supportsTablet: true,
  },
  android: {
    package: 'com.kanziw.fibonachicken',
    adaptiveIcon: {
      foregroundImage: './assets/logo512.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon-32x32.png',
  },
  extra: {
    eas: {
      projectId: 'ea0134ad-7387-4e00-8538-a3ad04e4d175',
    },
  },
});
