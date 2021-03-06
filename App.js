import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//screens
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import { useFonts } from 'expo-font';
//import firebase from 'firebase/app';

//firebase services
//import "firebase/auth";
//import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'seefood-3cd7b.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'seefood-3cd7b',
//   storageBucket: 'seefood-3cd7b.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

//firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

export default function App() {
  // const [loaded] = useFonts({
  //   Inter: require('./assets/fonts/Inter.ttf')
  // })

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if(route.name === 'Home'){
              iconName = focused
                ? 'home'
                : 'home-outline';
            }
            else if (route.name === 'Scanner') {
              iconName = focused
                ? 'scan-circle'
                : 'scan-circle-outline';
                return <Ionicons name={iconName} size={60} color={color} />;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerTitleStyle: {fontSize: 25},
          //headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {height: 100, alignItems: 'center', backgroundColor: 'black'},
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scanner" component={CameraScreen } />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


