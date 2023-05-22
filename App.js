import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './App/Home/Home';
import Message from './App/Message/Message';
import Reels from './App/Reels/Reels';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Reels" component={Reels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
