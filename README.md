# matt-playground
Matt's playground for experimenting with frameworks and APIs

## Set-up
Using Expo Go
- easy to set up.
- can easily test on physical devices -> install Expo Go on the app store (Android and iOS)
- works with native virtual emulators too (iOS and Android)
- able to also use 

To install all dependencies (including React Native), first enter into `rn-playground`:

```
cd rn-playground
```

and then,

```
npm install
```

To run on local iOS emulator (i.e Xcode Simulator)

```
npm run ios
```

in the `rn-playground` folder. Same ideas applies for `android`. We can also host this React Native project as a web app:

```
npm run web
```

## Discoveries

- can utilize web views to place normal react.js libraries into our app. i.e embed webview of cesium for globe
- problem: webviews have no support on actual web browsers for Expo. -> use iframe
- problem: can't use local files to load html -> have to use http hosted url

to test html locally in webviews, you have to install the `http-server` node package

```
npm install -g http-server
```

`cd` into directory that contains HTML you want to host then run,

```
python -m http.server
```

Then you will be able to use the URL `http://localhost:8000/yourfile.html`