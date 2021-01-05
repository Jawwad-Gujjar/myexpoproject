import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';




function Contect (props){
    return(
        <View style={styles.containor}>
            <Text style={{fontSize : 32}}> </Text>
     
        </View>
    )
}
 const styles =StyleSheet.create({
     containor :{
         flex :1 ,
         backgroundColor: '#fff',
         justifyContent : 'center',
         alignItems : 'center'
     }
 })

export default Contect;