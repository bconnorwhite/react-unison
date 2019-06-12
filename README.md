# React Infinite

## Scripts:

#### Install Expo:
npm install expo-cli --global

#### Start on Expo simulator:
npm run start-expo

#### Start on iOS simulator:
npm run start-ios

#### Start on Android simulator:
npm run start-ios

#### Start in Browser (localhost:3000):
npm run start-web

#### Build web code for production:
npm run build-web


## Code

- App.js is the entry point for React Native, src/index.js is the entry point for web.
- Both of these call into src/Main.js, which uses components in src/infinite.
- Components in src/infinite use process.browser to detect web vs. native. I'm not sure if this is reliable or not, but has worked so far.
