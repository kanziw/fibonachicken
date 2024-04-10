import type { ConfigContext, ExpoConfig } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'fibonachicken',
  slug: 'fibonachicken',
  version: '0.9.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
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
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
