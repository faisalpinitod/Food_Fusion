import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function OrderConfirmationScreen({ route }) {
  const { orderedDishes, orderReference } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.confirmationContainer}>
        <Text style={styles.confirmationTitle}>Order Confirmation</Text>
        <Text style={styles.confirmationText}>
          Thank you for your order! Your dishes will be prepared shortly.
        </Text>
        <Text style={styles.orderReferenceText}>Order Reference: {orderReference}</Text>
        <Text style={styles.orderedDishesTitle}>Ordered Dishes:</Text>
        {orderedDishes.map(dish => (
          <Text key={dish.idMeal} style={styles.orderedDishName}>
            {dish.strMeal}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  confirmationContainer: {
    padding: 16,
  },
  confirmationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 16,
  },
  orderReferenceText: {
    fontSize: 16,
    marginBottom: 16,
  },
  orderedDishesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderedDishName: {
    fontSize: 16,
  },
});
