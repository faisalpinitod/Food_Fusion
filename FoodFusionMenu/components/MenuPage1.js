import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuPage1 = () => {
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      const data = await response.json();
      setMenuItems(data.meals);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate('MenuItemDetail', { itemId: item.idMeal })}
    >
      <Image style={styles.itemImage} source={{ uri: item.strMealThumb }} />
      <Text style={styles.itemTitle}>{item.strMeal}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuPage1;
