import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';



function Home (props){
    return(
        <View style={styles.containor}>
            <Text style={{fontSize : 32}}> Home</Text>
            <Button  title="Open Camera" style={styles.btn} onPress={()=> props.navigation.navigate('Camera')}  />
            <Button  title="Open Gallery" style={styles.btn} onPress={()=> props.navigation.navigate('ImagePickerExample')}  />
        </View>
    )
}
 const styles =StyleSheet.create({
     containor :{
         flex :1 ,
         backgroundColor: '#fff',
         justifyContent : 'center',
         alignItems : 'center'
     },
 
 })

export default Home;