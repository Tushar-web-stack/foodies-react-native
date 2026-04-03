import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image,
  Modal,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from "@react-navigation/native";
import { recipesData } from "./Data";



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


const Dish_Filters = [
  {
    id: 1,
    title: "Dish Type",
    data: [
      { id: 1, name: "Breakfast" },
      { id: 2, name: "Lunch" },
      { id: 3, name: "Dinner" },
      { id: 4, name: "Burger" },
      { id: 5, name: "Snacks" },
      { id: 6, name: "Dessert" },


    ]
  },

  {
    id: 2,
    title: "Cuisine",
    data: [
      { id: 1, name: "Indian" },
      { id: 2, name: "Chinese" },
      { id: 3, name: "Italian" },
      { id: 4, name: "Mexican" },
      { id: 5, name: "Thai" },
      { id: 6, name: "American" },
    ]
  },

  {
    id: 3,
    title: "Diet",
    data: [
      { id: 1, name: "Vegetarian" },
      { id: 2, name: "Non-Veg" },
      { id: 3, name: "Vegan" },
      { id: 4, name: "Keto" },
      { id: 5, name: "Paleo" },
      { id: 6, name: "Low Carb" },
    ]
  },
  {
    id: 4,
    title: "Health",
    data: [
      { id: 1, name: "Low Sugar" },
      { id: 2, name: "Low Fat" },
      { id: 3, name: "High Protein" },
      { id: 4, name: "Gluten Free" },
      { id: 5, name: "Low Sodium" },
      { id: 6, name: "Organic" },
    ]
  }

];




const Search = () => {

  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDish, SetselectedDish] = useState("");
  const [selectedCuisine, SetselectedCuisine] = useState("");
  const [selectedDiet, SetselectedDiet] = useState("");
  const [selectedHealth, SetselectedHealthc] = useState("");

  const applyFilters = () => {
    let filtered = recipesData;

    // search
    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // dish
    if (selectedDish.trim() !== "") {
      filtered = filtered.filter(item => item.category === selectedDish);
    }

    // cuisine
    if (selectedCuisine.trim() !== "") {
      filtered = filtered.filter(item => item.cuisine === selectedCuisine);
    }

    // diet
    if (selectedDiet.trim() !== "") {
      filtered = filtered.filter(item => item.diet === selectedDiet);
    }

    // health
    if (selectedHealth.trim() !== "") {
      filtered = filtered.filter(item => item.health === selectedHealth);
    }

    setRecipes(filtered);
  };


  const searchRecipe = (text) => {

    if (text.trim() === "") {
      setRecipes([]);
      return;
    }

    const filtered = recipesData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.category.toLowerCase().includes(text.toLowerCase())
    );

    setRecipes(filtered);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.input}
          placeholder='Search food ...'
        />

        {search !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSearch("");
              setRecipes([]);
            }}
          >
            <FontAwesome name="remove" size={25} color="black" />
          </TouchableOpacity>
        )}
      </View>

      {search.trim().length > 0 && (
        <>
          {/* Search Button */}
          <TouchableOpacity
            style={styles.searchBtnCenter}
            onPress={() => searchRecipe(search)}
          >
            <Text style={{ color: "white" }}>Search</Text>
          </TouchableOpacity>

          {/* List */}
          <FlatList
            data={recipes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (

              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Details", {
                  recipe: item,
                  image: imageMap[item.id]
                })}
              >

                <Image
                  source={imageMap[item.id]}
                  style={styles.itemImage}
                />

                <View>
                  <Text style={styles.itemText}>
                    {item.name || item.category}
                  </Text>
                  <Text style={{ color: "green" }}>{item.desc}</Text>
                </View>

              </TouchableOpacity>
            )}
          />

          {/* Filter Button */}
          {recipes.length > 0 && (
            <TouchableOpacity
              style={styles.filterBtn}
              onPress={() => setModalVisible(true)}
            >
              <Icon name="filter-list" size={24} color="black" />
            </TouchableOpacity>
          )}

          {/* Modal */}
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modalView}>

              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Filters</Text>

                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <FontAwesome name="remove" size={25} color="black" />
                </TouchableOpacity>
              </View>


              <ScrollView 
                showsVerticalScrollIndicator={false}>             
                
                {Dish_Filters.map((section) => (
                  <View key={section.id} style={{ marginBottom: 25 }}>

                    <Text style={styles.heading}>{section.title}</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {section.data.map((item) => (

                        <TouchableOpacity
                          key={item.id}
                          style={[
                            styles.filterItem,
                            (
                              (section.title === "Dish Type" && selectedDish === item.name) ||
                              (section.title === "Cuisine" && selectedCuisine === item.name) ||
                              (section.title === "Diet" && selectedDiet === item.name) ||
                              (section.title === "Health" && selectedHealth === item.name)
                            ) && { backgroundColor: "#05B681" }   // ✅ green selected
                          ]}

                          onPress={() => {
                            if (section.title === "Dish Type") {
                              SetselectedDish(prev => prev === item.name ? "" : item.name);
                            } else if (section.title === "Cuisine") {
                              SetselectedCuisine(prev => prev === item.name ? "" : item.name);
                            } else if (section.title === "Diet") {
                              SetselectedDiet(prev => prev === item.name ? "" : item.name);
                            } else if (section.title === "Health") {
                              SetselectedHealthc(prev => prev === item.name ? "" : item.name);
                            }
                          }}
                        >

                          <Text style={[styles.filterText,
                          (
                            (section.title === "Dish Type" && selectedDish === item.name) ||
                            (section.title === "Cuisine" && selectedCuisine === item.name) ||
                            (section.title === "Diet" && selectedDiet === item.name) ||
                            (section.title === "Health" && selectedHealth === item.name)
                          ) && { color: "white" }   // ✅ white text
                          ]}

                          >
                            {item.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>

                  </View>
                ))}

              </ScrollView>
              <TouchableOpacity
                style={styles.submitfilter}
                onPress={() => {
                  applyFilters();
                  setModalVisible(false);
                }}

              >
                <Text style={styles.btnText}> {'Apply filters'}</Text>

              </TouchableOpacity>

            </View>

          </Modal>
        </>
      )}
    </View>
  )
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  backBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchBox: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 40,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: 'black'
  },

  item: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  searchBtnCenter: {
    width: '50%',
    height: 50,
    backgroundColor: "#05B681",
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  filterBtn: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    position: 'absolute',
    bottom: 50,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },

  modalView: {
    width: '100%',
    maxHeight: '60%',
    backgroundColor: "white",
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,

  },

  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },

  modalTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',

  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 1,
    marginBottom: 20,

  },

  filterItem: {
    paddingHorizontal: 10,   // left-right space
    paddingVertical: 6,      // height control
    margin: 5,               // gap between buttons
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,        // 👈 round pill shape
    backgroundColor: '#f2f2f2', // light grey bg
    alignItems: 'center',
    justifyContent: 'center',


  },

  filterText: {
    fontSize: 13,
    color: '#333',
  },

  submitfilter: {
    width: '50%',
    height: 50,
    backgroundColor: "#05B681",
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600

  },




}



);
