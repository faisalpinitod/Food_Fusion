// screens/FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch or manage favorite items here
    // For this example, let's assume you have a list of favorite items
    const mockFavoriteItems = [
      { id: '1', strMeal: 'Favorite Dish 1' },
      { id: '2', strMeal: 'Favorite Dish 2' },
      // Add more favorite items
    ];
    setFavoriteItems(mockFavoriteItems);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>
      {favoriteItems.map(item => (
        <Text key={item.id} style={styles.favoriteItem}>
          {item.strMeal}
        </Text>
      ))}
      {favoriteItems.length === 0 && (
        <Text style={styles.emptyMessage}>No favorite items yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoriteItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoritesScreen;
