# iOS webRTC

Starter kit for iOS apps (PhoneGap) that want to use webRTC. Running this app enables the user to load and execute a script from a url, the script has access to webRTC global variables.

### Run local server (if you need one, to fetch the script to execute)
```sh
python -m SimpleHTTPServer 8080
```

### Run simulator
```sh
phonegap cordova run ios
```

### From scratch

```sh
npm install xcode
npm install -g ios-deploy
mkdir my-app
cd my-app
phonegap create src "bundle_id" "app_name"
cd src
phonegap cordova platform add ios
phonegap cordova plugin add cordova-plugin-iosrtc
cp plugins/cordova-plugin-iosrtc/extra/hooks/iosrtc-swift-support.js hooks
chmod +x hooks/iosrtc-swift-support.js
```
add to config.xml:
```
<platform name="ios">
    <hook type="after_platform_add" src="hooks/iosrtc-swift-support.js" />
</platform>
```
```sh
phonegap cordova platform remove ios
phonegap cordova platform add ios
phonegap cordova run ios
```
