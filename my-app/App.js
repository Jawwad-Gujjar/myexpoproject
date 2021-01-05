import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './assets/src/screens/Home'
import About from './assets/src/screens/About'
import Contect from './assets/src/screens/Contect'
import Navigation from './assets/src/confige/navigation'

export default function App() {
  return (

<Navigation />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  
 
  // main1: {
  //   backgroundColor:'skyblue',
  //   width:'100%',
  //   flex: 1
  // },
  // main2: {
  //   backgroundColor:'pink',
  //   width:'100%',
  //   flex: 6
  // },
  // main3: {
  //   backgroundColor:'yellowgreen',
  //   width:'100%',
  //   flex: 1
  // },
  // boxes :{
  // marginTop: 10,
  // flexDirection : 'row',
  // justifyContent : 'space-around',
  // flexWrap : 'wrap',  
  // },
  //  items :{
  //   backgroundColor :'#ffff',
  //   width : 100,
  //   height : 100,
  //   marginBottom :10
  //  }
});
