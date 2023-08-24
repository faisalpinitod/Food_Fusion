import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [dishes, setDishes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(response => {
        const data = response.data.meals;
        setDishes(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderDish = ({ item }) => (
    <View style={styles.dishContainer}>
      <Image source={{ uri: item.strMealThumb }} style={styles.dishImage} />
      <Text style={styles.dishName}>{item.strMeal}</Text>
    </View>
  );

  const handleSearchChange = value => {
    setSearchKeyword(value);
  };

  const filteredDishes = dishes.filter(dish =>
    dish.strMeal.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search dishes..."
          style={styles.searchInput}
          value={searchKeyword}
          onChangeText={handleSearchChange}
        />
      </View>
      <FlatList
        data={filteredDishes}
        keyExtractor={item => item.idMeal}
        renderItem={renderDish}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  dishContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  dishImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 8,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
