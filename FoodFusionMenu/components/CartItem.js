
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Price: ${(item.quantity * 9.99).toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
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
  quantity: {
    color: '#888',
    marginBottom: 4,
  },
  priceContainer: {
    backgroundColor: '#FF5722',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  removeButton: {
    color: '#FF5722',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CartItem;
