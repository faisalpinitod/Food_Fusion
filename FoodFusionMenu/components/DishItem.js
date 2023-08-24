import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function DishItem({ dish, onAddToCart }) {
  return (
    <View style={styles.dishContainer}>
      <Image source={{ uri: dish.strMealThumb }} style={styles.dishImage} />
      <Text style={styles.dishName}>{dish.strMeal}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => onAddToCart(dish, true)} // true indicates adding
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.removeFromCartButton}
        onPress={() => onAddToCart(dish, false)} // false indicates removing
      >
        <Text style={styles.removeFromCartButtonText}>Remove</Text>
      </TouchableOpacity> */}
    </View>
  );
}


const styles = StyleSheet.create({
  dishContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  dishImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 8,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#009688',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
