import React,{useState} from "react";
import { Text, View, StyleSheet, Image, StatusBar,TouchableOpacity,FlatList, Animated,}  from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Meal_filters, recipesData } from './Data';
import * as Animatable from 'react-native-animatable';
const imageMap = {
'1': require('../../Assets/breakfast1.jpg'),
'2': require('../../Assets/breakfast2.jpg'),
'3': require('../../Assets/breakfast3.jpg'),
'4': require('../../Assets/breakfast4.jpg'),
'5': require('../../Assets/lunch1.jpg'),
'6': require('../../Assets/lunch2.jpg'),
'7': require('../../Assets/lunch3.jpg'),
'8': require('../../Assets/lunch4.jpg'),
'9': require('../../Assets/burger1.jpg'),
'10': require('../../Assets/burger2.jpg'),
'11': require('../../Assets/burger3.jpg'),
'12': require('../../Assets/burger4.jpg'),
};


const Home = () => {
        const [recipes,setRecipes] = useState(recipesData);
        const navigation = useNavigation()

       
  const filterCategory = (category) => {
    const filtered = recipesData.filter(item => item.category === category);
    setRecipes(filtered);
  };



        return (
                <View style={styles.container}>
                
                <StatusBar barStyle="light-content" />

                <View style={styles.topView}>
         <Image source={require('../../Assets/mirchi.jpg')} 
        style={styles.banner} 
/>

                <View style={styles.transparentView}>
                <Animatable.Text animation="slideInUp" style={styles.logo}>
                Recipe Pro
</Animatable.Text>
                        
                
                
             
                <TouchableOpacity activeOpacity={0.8} style={styles.searchBox} 
              onPress={()=> { navigation.navigate("Search")}}>

                                
                <EvilIcons name="search" size={35} color="black" />
                <Text style={styles.placeholder}> Please Search Here...</Text>
                 </TouchableOpacity>
                        
               <Text style={styles.note}>
                Search 1000+ recipes easily with one click
                </Text>

                </View>
                </View>

                <Text style={styles.heading}> Categories </Text>
                      
                <View>

                <FlatList
                horizontal
                 data={Meal_filters}
                keyExtractor={(item) => item.id}
                  contentContainerStyle={{ paddingHorizontal: 10, marginTop:15 }} 
                renderItem={({ item }) => {
                return (
                         <TouchableOpacity
      activeOpacity={0.8}
      style={styles.categoryItem}
      onPress={() => {
        navigation.navigate("RecipeByCategory", {
          category: item.name
        });
      }}
      >

                <View style={styles.card}>
                <MaterialIcons name={item.icon} size={35} color="#05B681" />  
                 </View>

                <Text style={styles.category}>{item.name}</Text>
                
                   </TouchableOpacity>
                   

     
    )
 }}
  />
                <Text style={styles.trendyHeading}> Trendy Recipes </Text>
                  <View>
    
                 <FlatList 
                 horizontal data={recipes} 
                   keyExtractor={(item) => item.id}
                  contentContainerStyle={{ marginTop: 10 }}
                 renderItem={({item})=>{
                 return(
                        <TouchableOpacity style={styles.recipeItem} 
                        onPress={()=>{
    navigation.navigate("Details",{
        recipe: item,
        image: imageMap[String(item.images[0])]  
    })

                                
                        }}>
                                <Image
       source={imageMap[String(item.images[0])]}
        style={styles.recipeImage}
      />                      
                         </TouchableOpacity>
                         )
}}
/>
                </View>
                </View> 
                </View>
        )

}

const styles = StyleSheet.create({
        container: {
                flex: 1,

        },

        topView: {
                width: '100%',
                 height:'35%',
                   marginBottom: 5  
        },

        banner: {
                width: '100%',
                height:'100%'
        },

        transparentView: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',

    
        },

        searchBox: {
                width: '85%',
                height: 45,
                backgroundColor: 'white',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginTop: 50,
        },

        placeholder: {
                marginLeft: 15,
                fontSize: 16,
                color: '#9e9e9e',

        },

        logo: {
                fontSize: 40,
                color: 'white',
                fontWeight: '500',
                position: 'absolute',
                top: -10,
                left: 20,
        },
        note: {
                fontSize: 18,
                 color:'#FFF3E0',
                width: '90%',
                alignSelf: 'center',
                fontWeight: '600',
                marginTop: 100,
                 textShadowColor:'rgba(0,0,0,0.6)',
                textShadowOffset:{width:1, height:1},
                textShadowRadius:6
        },

        heading: {
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 20,
                marginTop:5,
                marginRight: 20  
        },

        trendyHeading: {
         fontSize: 20,
        fontWeight: '600',
        marginLeft: 15,
        marginTop: 30, 
        
},

        categoryItem:{
                        width: 100,
                        borderRadius:8,
                        shadowColor:'rgba(0,0,0,.3)',
                        shadowOpacity:0.9,
                        marginHorizontal:8,
                        alignItems:'center'

        },

        card:{
                width:80,
                height:80,
                borderRadius:10,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center',
                shadowColor:'rgba(0,0,0,.3)',
                shadowOpacity:0.25
        },

        category:{
                fontSize:18,
                fontWeight:'600',
                alignSelf:'center',
                marginTop:4

        },

        recipeItem:{
        width:160,
        height:160,
        marginLeft:20,
        borderRadius:15,
        overflow:'hidden'
        },

        recipeImage:{
        width:'100%',
        height:'100%',
        borderRadius:15
        },


     

        smallImage:{
         width:70,
        height:70,
        borderRadius:10,
        
}
      



})



export default Home;