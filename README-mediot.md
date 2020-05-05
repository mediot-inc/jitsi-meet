# Publish sdk

## Notice
DO NOT USE Yarn! Please use npm to install node modules!!!

## Prepare
Should place _jitsi-maven-repository_ and _jitsi-meet-ios-sdk-releases_ besides this project, eg:
```
.
|_ jitsi-meet
|_ jitsi-maven-repository
|_ jitsi-meet-ios-sdk-releases
```

## android
0. go to maven website and download / install Maven `3.6.3`
1. Bump version in _android/gradle.properties_
2. Commit _android/gradle.properties_
3. `GIT_TAG=1 ./android/scripts/release-sdk.sh`
4. The script will build the newest sdk into _jitsi-maven-repository_
5. Push the _jitsi-maven-repository_ project
6. `git push && git push origin android-sdk-<version>`

## ios
0. run `brew install coreutils`
1. Checkout to latest tag in _jitsi-meet-ios-sdk-release_
2. Do `pod install` in _ios_ directory
3. Bump version in _ios/sdk/src/Info.plist_
4. Commit _ios/sdk/src/Info.plist_
5. `GIT_TAG=1 ./ios/scripts/release-sdk.sh`
6. The script will build the newest sdk into _jitsi-meet-ios-sdk-release_
7. In _jitsi-meet-ios-sdk-release_ project: `git push origin <version>`
8. `git push && git push origin ios-sdk-<version>`
