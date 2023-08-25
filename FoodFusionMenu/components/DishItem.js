
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DishItem = ({ item, onAddToCart }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onAddToCart}>
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.category}>{item.strCategory}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$9.99</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 12,
    borderRadius: 8,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  category: {
    color: '#888',
    marginBottom: 4,
  },
  priceContainer: {
    backgroundColor: '#FF5722',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default DishItem;

