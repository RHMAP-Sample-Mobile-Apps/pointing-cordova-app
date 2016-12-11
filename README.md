# Pointing Cordova App 
---------
Author: Erik Jan de Wit   
Level: Intermediate   
Technologies: Javascript, Cordova, socket.io.
Summary: A demonstration of how to use socket.io, fh-js-sdk.   
Community Project: [Feed Henry](http://feedhenry.org)    
Source: https://github.com/RHMAP-Sample-Mobile-Apps/pointing-cordova-app   
Prerequisites: node 6+, cordova 6.0+, ionic-cli 2+   

## What is it?

This application needs [Pointing Cloud App](https://github.com/RHMAP-Sample-Mobile-Apps/pointing-cloud) up and running. 
Different version of the app exist for other platform like [pointing-dotnet-app](https://github.com/RHMAP-Sample-Mobile-Apps/pointing-dotnet-app).
The app is used to story point a user story. 
- You can create a session that other members can join to vote. As owner of the session, you will have the right of making votes public.
- Tou can join a session created by another owner and vote.

## Build instructions

#### Pre-requesites
 * install cordova
```
npm install -g cordova 
```
 * install ionic
 ```
 npm install -g ionic
 ```

### Build & Run
```bash
npm install
ionic serve
```

### Build & Run native
* iOS
```bash
ionic add platform ios; ionic run ios
```
* Android
```bash
ionic add platform android; ionic run android
```
