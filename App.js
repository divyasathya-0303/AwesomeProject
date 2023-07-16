/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/screens/home';
 import CustomButton from './src/screens/pressable';
 import keyboard from './src/screens/keyboard';
 import modal from './src/screens/modal';
 import activity from './src/screens/activity';
 import state from './src/screens/statusbar';
 import fun from './src/screens/switch';
 import flat from './src/screens/flat';
 const Stack = createNativeStackNavigator();

 //const App = () => {
  export default function App()
  {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={flat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//export default App;

