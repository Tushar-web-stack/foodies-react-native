export const Meal_filters = [
  { id: '1', name: 'Breakfast', icon: 'free-breakfast' },
  { id: '2', name: 'Lunch', icon: 'lunch-dining' },
  { id: '3', name: 'Burger', icon: 'fastfood' },
  { id: '4', name: 'Soup', icon: 'ramen-dining' }
];

export const recipesData = [
  {
    id: '1',
    name: 'Idli',
    category: 'Breakfast',
    ingredients: ['Rice', 'Dal','Salt', 'Water', 'Fenugreek Seeds'],
    images: ['1']
  },
  {
    id: '2',
    name: 'Chai',
    category: 'Breakfast',
    ingredients: ['Tea Leaves', 'Milk', 'Water', 'Sugar', 'Ginger'],
    images: ['2']
  },
  {
    id: '3',
    name: 'Dosa',
    category: 'Breakfast',
    ingredients: ['Rice', 'Urad Dal', 'Salt', 'Oil', 'Water'],
    images: ['3']
  },
  {
    id: '4',
    name: 'Poha',
    category: 'Breakfast',
    ingredients: ['Poha', 'Onion', 'Peanuts','Mustard Seeds', 'Curry Leaves'],
    images: ['4']
  },

{
  id: '5',
    name: 'Biryani',
    category: 'Lunch',
    ingredients: ['Rice', 'Spices', 'Chicken','Onion', 'Yogurt'],
    images: ['5']
  },
  {
    id: '6',
    name: 'Pasta',
    category: 'Lunch',
    ingredients: ['Pasta', 'Tomato Sauce', 'Garlic', 'Olive Oil', 'Cheese'],
    images: ['6']
  },
  {
    id: '7',
    name: 'Pizza',
    category: 'Burger',
    ingredients: ['Pizza Base', 'Tomato Sauce', 'Cheese', 'Vegetables', 'Oregano'],
    images: ['7']
  },
  {
    id: '8',
    name: 'Panner roll',
    category: 'Lunch',
    ingredients:  ['Roti', 'Paneer', 'Onion', 'Capsicum', 'Sauce'],
    images: ['8']
  },

{
  id: '9',
    name: 'Burger',
    category: 'Burger',
    ingredients:['Bun', 'Patty', 'Lettuce', 'Tomato', 'Sauce'],
    images: ['9']
  },
  {
    id: '10',
    name: 'VegBurger',
    category: 'Lunch',
    ingredients:  ['Bun', 'Veg Patty', 'Cheese', 'Onion', 'Sauce'],
    images: ['10']
  },
  {
    id: '11',
    name: 'NonVegBurger',
    category: 'Burger',
    ingredients: ['Bun', 'Chicken Patty', 'Lettuce', 'Cheese', 'Mayonnaise'],
    images: ['11']
  },
  {
    id: '12',
    name: 'ChilliBurger',
    category: 'Soup',
    ingredients:  ['Bun', 'Spicy Patty', 'Chilli Sauce', 'Onion', 'Cheese'],
    images: ['12']
  },
];



const searchrecipesData = [
  { id: '1', category: 'Idli' ,desc: 'Quick breakfast' },
  { id: '2', category: 'Chai' ,desc:'Healthy morning meal'},
  { id: '3',  category: 'Dosa', desc: 'Tasty dish'},
  { id: '4', category: 'Poha' ,desc: 'Protein rich food'},
  { id: '5',  category: 'Biryani',desc: 'Full meal' },
  { id: '6', category: 'Pasta', desc: 'Spicy lunch' },
  { id: '7',  category: 'Pizza', desc: 'Testy lunch'},
  { id: '8', category: 'PannerRoll',desc: 'Nice lunch'},
  { id: '9', category: 'Hamburger', desc:'Frid burger'},
  {id: '10',  category: 'Grilledburger', desc: 'Testy burger'},
  { id: '11',  category: 'Crispyburger',desc: 'Chilly burger' },
  { id: '12',  category: 'burger',desc: 'Frid burger' },
];


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