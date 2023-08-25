
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutScreen({ route }) {
  const { cartItems } = route.params;
  const [isPaymentProcessing, setPaymentProcessing] = useState(false);
  const navigation = useNavigation();

  const handlePayment = async () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      Alert.alert('Payment Successful', 'Thank you for your order!');
      navigation.navigate('OrderConfirmation'); // Navigate to the OrderConfirmationScreen
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {/* Display cart items and total price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>
          ${(cartItems.reduce((total, item) => total + item.quantity * 9.99, 0)).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handlePayment} // Call the handlePayment function on button press
        disabled={isPaymentProcessing} // Disable the button while payment is being processed
      >
        <Text style={styles.confirmButtonText}>
          {isPaymentProcessing ? 'Processing...' : 'Confirm Order'}
        </Text>
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
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
  },
  confirmButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
