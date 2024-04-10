import type { ConfigContext, ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'kanziw',
  name: 'fibonachicken',
  slug: 'fibonachicken',
  version: '0.9.0',
  scheme: 'fibonachicken',
  orientation: 'portrait',
  icon: './assets/logo512.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android', 'web'],
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
    name: '남기지 않는다. 치킨. 피보나치킨!',
    shortName: 'FibonaChicken',
    favicon: './assets/favicon-32x32.png',
    output: 'single',
    bundler: 'metro',
    display: 'fullscreen',
    preferRelatedApplications: true,
    splash: {
      backgroundColor: '#ffffff',
      image: './assets/logo512.png',
    },
  },
  extra: {
    eas: {
      projectId: 'ea0134ad-7387-4e00-8538-a3ad04e4d175',
    },
  },
  updates: {
    url: 'https://u.expo.dev/ea0134ad-7387-4e00-8538-a3ad04e4d175',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
});
