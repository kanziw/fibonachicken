# fibonachicken

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

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
yarn start
```

## Register Apple Devices for internal distribution
```zsh
yarn eas device:create
```

## Create Project History
```zsh
yarn create expo --template expo-template-blank-typescript
```
