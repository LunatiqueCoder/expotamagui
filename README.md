# Expo Web and Tamagui

> ⚠️ [Please be sure your environment is set up correctly for React Native.][26]

## ⭐ Features
- [Expo Router for Web][22]
- [Tamagui][29]
- Other

## 🏃🏻‍♂️ Running the app

<details><summary> 📱 <b>Native</b></summary>


##### `yarn start`

   <br>

   Starts `native` Metro Bundler. You can run the app in two ways:

   <br>

  [Development build][1] (recommended)

   >  Run `yarn ios` or `yarn android` to create the development builds. After that, when you can also use `i` or `a` to run your app from the Metro Bundler terminal, without creating the development builds again. Rerunning the app is usually necessary when something changes on the native side.

  <br> 

  [Expo Go][25]

  >  Press 's' to switch to Expo Go. Then you can use `i` or `a` to run the app on iOS or Android respectively.

   <img width="569" alt="image" src="https://github.com/LunatiqueCoder/gigburn/assets/55203625/9d50ce69-d87e-4882-8c0b-ac4f910a41d1">

</details>

<details><summary> 💻   <b>Web</b></summary>

   ##### `yarn start-web`

   <br>

   Starts `web` Metro Bundler. You can access the web app in two ways:

   <img width="571" alt="image" src="https://github.com/LunatiqueCoder/gigburn/assets/55203625/d6b2599a-1367-4767-b790-fc5350fc9160">

</details>

<details><summary>  ⚠️   <b>Both</b></summary>
   
<br>
   
 If you are targeting both web and mobile with Expo only (no Next.js), be sure to start two metro bundlers on different ports: one for native (8081) and another one for web (8082).

 <img width="571" alt="image" src="https://tamagui.dev/metro-bundler-ports.png">


</details>

[1]: https://docs.expo.dev/develop/development-builds/introduction/
[6]: https://redux-toolkit.js.org/
[22]: https://docs.expo.dev/guides/customizing-metro/#web-support
[23]: https://supabase.com/
[24]: https://www.typescriptlang.org/
[25]: https://docs.expo.dev/get-started/expo-go/
[26]: https://reactnative.dev/docs/environment-setup
[27]: https://beta.reactjs.org/learn/react-developer-tools
[29]: https://tamagui.dev
