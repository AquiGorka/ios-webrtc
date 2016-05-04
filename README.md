# iOS webRTC

Starter kit for iOS (PhoneGap) apps that use webRTC. This app enables the user to load script from a url (local or global or ip), the script has access to webRTC global variables.

### Build
```sh
npm i
```

### Run local server
```sh
python -m SimpleHTTPServer 8080
```

### Run simulator
```sh
phonegap cordova run ios
```

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
