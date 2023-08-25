
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import DishItem from '../components/DishItem';
import CartItem from '../components/CartItem';

export default function MainScreen({ navigation }) {
  const [dishes, setDishes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      setDishes(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.idMeal === item.idMeal);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.idMeal === item.idMeal ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.idMeal !== item.idMeal);
    setCartItems(updatedCart);
  };

  const searchFilterFunction = (text) => {
    setSearchQuery(text);
    const filteredDishes = dishes.filter((dish) =>
      dish.strMeal.toLowerCase().includes(text.toLowerCase())
    );
    setDishes(filteredDishes);
  };

  const goToCart = () => {
    navigation.navigate('Cart', { cartItems });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Delicious Dishes</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={goToCart}
        >
          <Text style={styles.cartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
      <SearchBar
        placeholder="Search Dishes..."
        onChangeText={searchFilterFunction}
        value={searchQuery}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchInputContainer}
      />
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <DishItem
            item={item}
            onAddToCart={() => addToCart(item)}
          />
        )}
      />
        <Modal
                 animationType="slide"
                  transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                  >
                    <View style={styles.modalContainer}>
                      <Text style={styles.modalTitle}>Cart</Text>
                      <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.idMeal}
                        renderItem={({ item }) => (
                          <CartItem
                            item={item}
                            onRemove={() => removeFromCart(item)}
                          />
                        )}
                      />
                      <TouchableOpacity
                        style={styles.closeModalButton}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={styles.closeModalButtonText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
              );
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 0,
  },
  searchInputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  modalContainer: {
            flex: 1,
            justifyContent: 'center',
            padding: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          modalTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 16,
          },
          closeModalButton: {
            backgroundColor: '#FF5722',
            paddingVertical: 12,
            alignItems: 'center',
            borderRadius: 4,
            marginTop: 16,
          },
          closeModalButtonText: {
            color: '#fff',
            fontWeight: 'bold',
          },
        });