#!/bin/bash

export NODE_ENV=production

BUILD_OUTPUT=$(yarn eas build --platform ios --local --json --non-interactive)

ARTIFACT_PATH=$(find . -name 'build-*.ipa' | grep -v ./builds | head -n 1)
ARTIFACT_FILE_NAME=$(echo $ARTIFACT_PATH | sed 's/^.\///')

echo $ARTIFACT_FILE_NAME
yarn eas submit --platform ios --path $ARTIFACT_PATH --non-interactive

mv $ARTIFACT_PATH ./builds/
echo $BUILD_OUTPUT > ./builds/$ARTIFACT_FILE_NAME.log
