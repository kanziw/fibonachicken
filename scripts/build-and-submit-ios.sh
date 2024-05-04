#!/bin/zsh

set -euo pipefail

NODE_ENV=production
GIT_SHORT_SHA=$(git rev-parse --short HEAD)
GIT_COMMIT_MSG=$(git log -1 --pretty=%B)

BUILD_OUTPUT=$(yarn eas build --platform ios --local --json --non-interactive --wait)

ARTIFACT_PATH=$(find . -name 'build-*.ipa' | grep -v ./builds | head -n 1)
ARTIFACT_FILE_NAME=$(echo $ARTIFACT_PATH | sed 's/^.\///')

echo $ARTIFACT_FILE_NAME
yarn eas submit --platform ios --path $ARTIFACT_PATH --non-interactive --no-wait

mv $ARTIFACT_PATH ./builds/
echo $BUILD_OUTPUT > ./builds/$ARTIFACT_FILE_NAME.log
