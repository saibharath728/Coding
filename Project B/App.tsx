import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import ChatWindows from './src/components/ChatWindows';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import Search from './src/components/Search';
import Settings from './src/components/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          />
          <Stack.Screen
          name="HomeScreen"
          component={TabBar}
          options={{ headerShown: false }}
          />
          <Stack.Screen name='TabBar' options={{ headerShown: false}}
          component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatWindows} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}

export default App;
