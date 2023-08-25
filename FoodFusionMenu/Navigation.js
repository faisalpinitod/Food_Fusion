
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen'; // Import your MainScreen component
import CartScreen from './screens/CartScreen'; // Import your CartScreen component
import CheckoutScreen from './screens/CheckoutScreen'; // Import your CheckoutScreen component
import OrderConfirmationScreen from './screens/OrderConfirmationScreen'; // Import your OrderConfirmationScreen component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

