// screens/MenuItemDetail.js
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const MenuItemDetail = ({ route }) => {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.strMealThumb }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.strMeal}</Text>
      <Button
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={handleFavoriteToggle}
      />
      {/* Display more details about the menu item */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  // Add more styles as needed
});

export default MenuItemDetail;
