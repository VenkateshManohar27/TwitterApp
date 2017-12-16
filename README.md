# TwitterApp

React Native Frontend

This is a simple Twitter app created as part of Hasura Product Development Fellowship


1. Created by react-native init
2. Installed native base (npm install native-base --save)
3. Uses React navigation for navigating through the screens
4. Uses ionicons as built in in native base
5. Uses Stack Navigation to navigate to search, notifications and mail screen
6. Uses custom Sidebar component used by DrawerNavigator to show the UI of Drawer as required
7. Organization of structure basically done keeping reusability in mind

The application opens with Home page with the following options
1) Clicking on user profile pic will open the drawer Sidebar with profile Info
2) Search icon will open Search page as a stack navigation
3) Notification icon will open Notification page as a stack navigation
4) Mail icon will open Mail page as a stack navigation
5) Fab icon displays few icons

Steps to set up development environment 
    --Follow the steps as mentioned in "Getting Started" section of react-native website in the 
      "Build with native code" tab  
    
Clone Repository and Running on device/emulator 
    
    -- git clone https://github.com/VenkateshManohar27/TwitterApp.git
    -- cd TwitterApp
    -- npm install (to install project dependencies)
    -- react-native run-android (This will run the app on your connected emulator or development device)