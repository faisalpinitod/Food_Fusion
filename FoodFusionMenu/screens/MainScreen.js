import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DishItem from '../components/DishItem'; // Import your DishItem component here




export default function MainScreen({ navigation }) {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(response => {
        const data = response.data.meals;
        setDishes(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddToCart = (dish) => {
    const existingItem = cart.find(item => item.idMeal === dish.idMeal);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.idMeal === dish.idMeal ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Checkout', { cart })}
      >
        <Text style={styles.cartButtonText}>View Cart</Text>
      </TouchableOpacity>
      <FlatList
        data={dishes}
        keyExtractor={item => item.idMeal}
        renderItem={({ item }) => (
          <DishItem
            dish={item}
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  cartButton: {
    backgroundColor: '#009688',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
