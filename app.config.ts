import type { ConfigContext, ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'fibonachicken',
  slug: 'fibonachicken',
  version: '0.9.0',
  orientation: 'portrait',
  icon: './assets/logo512.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/logo512.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon-32x32.png',
  },
});
