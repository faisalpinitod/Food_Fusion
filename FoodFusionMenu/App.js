// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// export default function App() {
//   const [dishes, setDishes] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [cart, setCart] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);

//   useEffect(() => {
//     axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
//       .then(response => {
//         const data = response.data.meals;
//         setDishes(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Calculate the total cost whenever the cart changes
//     const cost = cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);
//     setTotalCost(cost);
//   }, [cart]);

//   const renderDish = ({ item }) => (
//     <View style={styles.dishContainer}>
//       <Image source={{ uri: item.strMealThumb }} style={styles.dishImage} />
//       <Text style={styles.dishName}>{item.strMeal}</Text>
//       <TouchableOpacity
//         style={styles.addToCartButton}
//         onPress={() => addToCart(item)}
//       >
//         <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const addToCart = dish => {
//     // Check if the dish is already in the cart
//     const existingItem = cart.find(item => item.idMeal === dish.idMeal);

//     if (existingItem) {
//       // Update quantity if the dish is already in the cart
//       const updatedCart = cart.map(item =>
//         item.idMeal === dish.idMeal ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       // Add the dish to the cart
//       setCart([...cart, { ...dish, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = dishId => {
//     // Remove the dish from the cart
//     const updatedCart = cart.filter(item => item.idMeal !== dishId);
//     setCart(updatedCart);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search dishes..."
//           style={styles.searchInput}
//           value={searchKeyword}
//           onChangeText={setSearchKeyword}
//         />
//       </View>
//       <FlatList
//         data={dishes.filter(dish =>
//           dish.strMeal.toLowerCase().includes(searchKeyword.toLowerCase())
//         )}
//         keyExtractor={item => item.idMeal}
//         renderItem={renderDish}
//         numColumns={2}
//         contentContainerStyle={styles.flatListContainer}
//       />
//       <View style={styles.cartContainer}>
//         <Text style={styles.cartTitle}>Shopping Cart</Text>
//         {cart.map(item => (
//           <View key={item.idMeal} style={styles.cartItem}>
//             <Text style={styles.cartItemName}>{item.strMeal}</Text>
//             <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//             <Text style={styles.cartItemPrice}>Price: ${parseFloat(item.price) * item.quantity}</Text>
//             <TouchableOpacity
//               style={styles.removeCartItemButton}
//               onPress={() => removeFromCart(item.idMeal)}
//             >
//               <Text style={styles.removeCartItemButtonText}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//         <Text style={styles.totalCost}>Total Cost: ${totalCost.toFixed(2)}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   flatListContainer: {
//     paddingVertical: 16,
//     paddingHorizontal: 8,
//   },
//   searchContainer: {
//     padding: 16,
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   dishContainer: {
//     flex: 1,
//     alignItems: 'center',
//     margin: 8,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   dishImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   dishName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   addToCartButton: {
//     backgroundColor: '#009688',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginTop: 8,
//   },
//   addToCartButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   cartContainer: {
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     padding: 16,
//   },
//   cartTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   cartItem: {
//     marginBottom: 16,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cartItemQuantity: {
//     color: '#666',
//   },
//   cartItemPrice: {
//     color: '#666',
//   },
//   removeCartItemButton: {
//     marginTop: 8,
//     backgroundColor: '#FF5722',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   removeCartItemButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   totalCost: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     alignSelf: 'center',
//   },
// });
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Food Fusion Menu' }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
