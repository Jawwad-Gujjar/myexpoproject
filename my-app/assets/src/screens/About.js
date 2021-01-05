import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';




function About (props){
    return(
        <View style={styles.containor}>
          
               
     
        </View>
    )
}
 const styles =StyleSheet.create({
     containor :{
   flex : 1,
         backgroundColor: '#fff',
        
     },
     inp :{
        height : 50,
        borderColor :'black',
        width:'80%',
        justifyContent : 'center',
        alignItems : 'center' ,
        borderWidth :1,
        marginLeft : 20
     },
     txt:{
         marginLeft : 20,
         fontSize : 15
     }
 })

export default About;