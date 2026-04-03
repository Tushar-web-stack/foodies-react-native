import React,{useEffect} from "react";
import {View,StyleSheet,}  from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000);
    }, []);
    return(
        <View style={styles.container}>
          <Animatable.Image animation={'slideInUp'} source={require('../../Assets/foodlogo.jpg')} style={styles.foodlogo}/>
          <Animatable.Text  animation={'slideInUp'}style={styles.appName}> Recipe Pro</Animatable.Text>
            <Animatable.Text animation={'slideInUp'}style={styles.tagline}> Search Anyone With  Health Filters </Animatable.Text>
        </View>
    )

}
const styles=StyleSheet.create({
       container:{
            flex:1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center'
       } ,

       foodlogo:{
                width:200,
                height:200
       },

        appName:{
                fontSize: 50,
                fontWeight:'600',
                color:'white',
                marginTop:10
        },
        tagline:{
                position: 'absolute',
                bottom: 50,
                fontSize: 20,
                fontWeight:'600',
                color:'black'


        }
    }
)



export default Splash;