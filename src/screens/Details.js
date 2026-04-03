import React ,{useState } from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity,  FlatList,}  from 'react-native';
import { useNavigation, useRoute} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
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


const Details = () => {
   
    const navigation = useNavigation();
      const route = useRoute();

   const item = route.params?.recipe;
const image = route.params?.image;
      const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Health", "Cuisine", "Ingredients", "Diet", "Cautions"];

   // ✅ Data for all tabs
  const healthData = [
    "Rich in nutrients",
    "Good for digestion",
    "Low in fat",
    "Boosts immunity",
  "Supports heart health"
  ];

  const cuisineData = ["Indian", 
    "South Indian",
    "Homestyle cooking",
  "Traditional recipe",
  "Popular street food style",
  ];

  const dietData = [
    "Weight loss friendly",
    "Balanced diet",
    "Low calorie option",
  "High fiber content",
  "Good for daily meals",
  ];

  const cautionData = [
    "Avoid overeating",
    "Not suitable for everyone",
    "May contain allergens",
  "Check ingredients before use",
  "Consume in moderation",

  ];

  const ingredientsData = [
  "1 cup oats",
  "1/2 cup milk",
  "1 banana",
  "Almonds",
  "Cashews",
];
    return(
        
         
         
  <View style={styles.root}>
 
      

            <Animatable.Image
  source={image || imageMap[String(item?.id)]}
  style={styles.banner}
  animation={'slideInUp'}
/>
        
            <TouchableOpacity style={styles.backBtn}
                 onPress={() => navigation.goBack()}
            >
                 <Ionicons name="chevron-back" size={30} color="black" /> 
            </TouchableOpacity>

       <Text style={styles.title}>{item?.name}</Text>

            <Text style={styles.metaText}>Calories:{""}
            <Text style={{ color: "orange" }}>{item?.calories || "1012.6226914"}</Text>
          </Text>
 
          <Text style={styles.metaText}>Total Weight:{""}
         <Text style={{ color: "red" }}>{item?.weight || "300 g"}
          </Text>
        </Text>

        <Text style={styles.metaText}>Meal Type:{""}
       <Text style={{ color: "green" }}>{item?.mealType || "Breakfast/Dinner"}
        </Text>
        </Text> 
          
       {   /* Tabs */}
      <FlatList
        horizontal
        data={tabs}
        style={{ maxHeight: 50 }}   
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  selectedTab === index ? "#05B681" : "white",
                borderWidth: selectedTab === index ? 0 : 1,
              },
            ]}
            onPress={() => setSelectedTab(index)}
          >
            <Text
              style={{
                color: selectedTab === index ? "white" : "black",
                fontWeight: "600", fontSize: 14,   
              }}
            >
              {item}
              </Text>
               </TouchableOpacity>
)} 
      />
              {selectedTab === 0 && (
        <View style={styles.labelsContainer}>
           {healthData.map((item, index) => (
          <View key={index} style={styles.labelBox}>
              <Text style={styles.labelText}>{item}</Text>    
        </View>
     ))}
      </View>
              )}

      {selectedTab === 1 && (
        <View style={styles.labelsContainer}>
          {cuisineData.map((item, index) => (
            <View key={index} style={styles.labelBox}>
              <Text style={styles.labelText}>{item}</Text>
            </View>
          ))}
        </View>
      )}




      {/* Ingredients Section */}
      {selectedTab === 2 && (
         <View style={styles.labelsContainer}>
  {ingredientsData.map((item, index) => (
    <View key={index} style={styles.labelBox}>
      <Text style={styles.labelText}>{item}</Text>
    </View>
            ))}
          </View>
       
 )}

      {selectedTab === 3 && (
        <View style={styles.labelsContainer}>
          {dietData.map((item, index) => (
            <View key={index} style={styles.labelBox}>
              <Text style={styles.labelText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

           {selectedTab === 4 && (
        <View style={styles.labelsContainer}>
          {cautionData.map((item, index) => (
            <View key={index} style={styles.labelBox}>
              <Text style={styles.labelText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>

 
    
    )}
const styles=StyleSheet.create({
              root:{
             flex:1
              },

              banner:{
                width: '100%',
                 height:250,
                resizeMode:'cover',

            },

            backBtn:{
                    width:50,
                    height:50,
                    borderRadius:25,
                    backgroundColor:'white',
                    position:'absolute',
                    top:20,
                    left:5,
                    alignItems:'center',
                    justifyContent:'center'

            },

            title:{
                    fontSize: 30,
                    fontWeight:'600',
                    width:'90%',
                    alignSelf:'center'
            },

            source:{
                    marginLeft:25,
                    marginTop:10
            },

                typeItem:{
                         paddingHorizontal: 12,
                        paddingVertical: 6,
                        marginHorizontal: 4,
                        borderRadius: 15,
                        borderColor: '#ccc',
                        alignSelf: 'flex-start'  

                },

                labelsContainer:{
                width:'90%',
                 alignSelf:'center',
                 marginTop:20,
                },
              

labelBox: {
  width: "100%",   // 👈 2 column layout
  borderWidth: 0.5,
  borderColor: "#9e9e9e",
  borderRadius: 10,
  padding: 12,
  marginBottom: 12,

  backgroundColor: "#fff",
},

labelText: {
  fontSize: 14,
  color: "#333",
 
},

                   heading:{
                  fontSize:20,
                  fontWeight:'600',
                  width:'90%',           
                  alignSelf:'center',    
                  marginTop:15
 
},
tab: {
  paddingHorizontal: 15,
  height: 35,             
  justifyContent: "center",
  alignItems: "center",
  
  marginRight: 10,
  borderRadius: 50,
  borderColor: "#05B681",
},

tabsContainer: {
  marginTop: 15,
  paddingLeft: 20,
},
  metaText: {
  width: "90%",
  alignSelf: "center",
  fontSize: 15,
  marginTop: 5,
  color: "#333",
},


                  
})
export default Details;