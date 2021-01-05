import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native'
import Home from '../screens/Home'
import About from '../screens/About'
import Contect from '../screens/Contect'
import CameraApp from '../screens/camera' 
import { color } from 'react-native-reanimated';
import ImagePickerExample from '../screens/Gallery'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen      name="Home" component={Home} />
        <Stack.Screen  options={{title :"UNIT" , headerStyle :{
         backgroundColor : "lightgreen" }}} name="Contect" component={Contect} />
           <Stack.Screen options={{title :"PRODUCT", headerStyle :{
         backgroundColor : "lightgreen" }}} name="About" component={About} />
           <Stack.Screen  name="Camera" component={CameraApp} />
           <Stack.Screen  name="ImagePickerExample" component={ImagePickerExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
