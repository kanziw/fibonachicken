# fibonachicken

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client) ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=fibonachicken) ![License](https://img.shields.io/badge/license-MIT-blue)

favicon reference: https://favicon.io/emoji-favicons/chicken/

## Pre-requisite
- [asdf](https://github.com/asdf-vm/asdf)

```zsh
asdf plugin add nodejs
asdf plugin add doppler
asdf install
doppler login
doppler setup
```

## Start
```zsh
npm install #--legacy-peer-deps
npm start
```

## Publish
```zsh
npx eas-cli@latest login
npx eas-cli@latest build --platform ios --profile production --non-interactive --no-wait --auto-submit
npx eas-cli@latest build --platform android --profile production --non-interactive --no-wait --auto-submit
```

## Register Apple Devices for internal distribution
```zsh
npx eas-cli@latest device:create
```

## Create Project History
```zsh
npx create expo --template expo-template-blank-typescript
```
