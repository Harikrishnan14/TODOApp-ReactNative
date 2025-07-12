# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ![Image](https://github.com/user-attachments/assets/5b6a1362-a3a7-4997-a2ef-9d83be414541)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install Expo CLI (optional but recommended) :** While `npx expo start` works without it, installing Expo globally is useful for frequent development:
   ### `npm install -g expo-cli`

4. **Clone or Download the Code :**

   Clone the repository using the following command:
   ### `git clone https://github.com/Harikrishnan14/TODOApp-ReactNative.git`

   Then, navigate into the project folder:
   ### `cd TODOApp-ReactNative`

   Or alternatively, download the ZIP file from GitHub and extract it.

5. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the application [ Don't close this terminal we will be using this later] :
      ### `npm i`
      
# Starting the Application:

1. On the terminal which you used to install the dependencies for the application, run the following command to start the application :
   ### `npx expo start`
   
2. Choose how to run the app:
      - On a physical device (using the [Expo Go app](https://expo.dev/go))
      - On Android Emulator ([setup guide](https://docs.expo.dev/workflow/android-studio-emulator/))
      - On iOS Simulator (Mac only) ([setup guide](https://docs.expo.dev/workflow/ios-simulator/))

# Packages Used:

1. **Expo :** A framework for building universal React Native apps. It simplifies development with built-in tools and libraries for routing, fonts, device APIs, and more.
2. **expo-router :** A file-based routing solution for Expo and React Native, enabling you to build navigation structures based on your folder layout.
3. **react-native-gesture-handler & react-native-reanimated :** Enables smooth and customizable gesture-based interactions and animations.
4. **react-native-screens & react-native-safe-area-context :** Improves navigation performance and ensures proper layout on devices with notches and safe areas.
5. **expo-status-bar & expo-splash-screen :** Handles native status bar and splash screen behavior with easy configuration.
6. **@expo-google-fonts/inter :** Adds support for using Google’s Inter font family with ease.
7. **AsyncStorage :** A persistent key-value storage system for storing app data locally on the device.
