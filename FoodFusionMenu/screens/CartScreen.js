
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const { cartItems } = route.params;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (9.99 * item.quantity), 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.strMeal}</Text>
            <Text style={styles.itemPrice}>Price: $9.99</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Checkout', { cartItems })}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    marginBottom: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
    borderTopWidth: 1,
    paddingTop: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 32,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

// export default CartScreen;
