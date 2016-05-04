# iOS webRTC

Starter kit for iOS (PhoneGap) apps that use webRTC.

### From scratch

- npm install xcode
- npm install -g ios-deploy
- mkdir ios-webrtc
- cd ios-webrtc
- phonegap create src "net.aquigorka.ioswebrtc" "iOS webRTC"
- cd src
- phonegap cordova platform add ios
- phonegap cordova plugin add cordova-plugin-iosrtc
- cp plugins/cordova-plugin-iosrtc/extra/hooks/iosrtc-swift-support.js hooks
- chmod +x hooks/iosrtc-swift-support.js
- add to config.xml
```
<platform name="ios">
    <hook type="after_platform_add" src="hooks/iosrtc-swift-support.js" />
</platform>
```
- phonegap cordova platform remove ios
- phonegap cordova platform add ios
- phonegap cordova run ios (if there is an ios device connected this will deploy the app to it)
