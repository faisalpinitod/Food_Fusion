import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function OrderConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/stock-vector-modern-illustration-confirmation-of-an-online-order-with-a-girl-illustration-website-order-1781610467.jpg')} // Add your own success image
        style={styles.successImage}
      />
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.message}>Your order has been confirmed. Thank you for your purchase!</Text>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Main')} // Navigate back to main screen or appropriate screen
      >
        <Text style={styles.continueButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    textAlign: 'center',
    marginBottom: 32,
  },
  continueButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

// export default OrderConfirmationScreen;
