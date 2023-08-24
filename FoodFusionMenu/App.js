import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPage1 from './components/MenuPage1'; // Renamed import
import MenuItemDetail from './screens/MenuItemDetail';
import FavoritesScreen from './screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MenuStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuPage1} /> {/* Renamed component */}
    <Stack.Screen name="MenuItemDetail" component={MenuItemDetail} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu" component={MenuStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
