
// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const DishItem = ({ item, onAddToCart }) => {
//   return (
//     <TouchableOpacity style={styles.container} onPress={onAddToCart}>
//       <Image source={{ uri: item.strMealThumb }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.title}>{item.strMeal}</Text>
//         <Text style={styles.category}>{item.strCategory}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.price}>$9.99</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     resizeMode: 'cover',
//     marginRight: 12,
//     borderRadius: 8,
//   },
//   details: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   category: {
//     color: '#888',
//     marginBottom: 4,
//   },
//   priceContainer: {
//     backgroundColor: '#FF5722',
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//   },
//   price: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
// });

// export default DishItem;

// In DishItem.js

// In DishItem.js

// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// export default function DishItem({ item, onAddToCart }) {
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: item.strMealThumb }} style={styles.dishImage} />
//       <View style={styles.dishInfo}>
//         <Text style={styles.dishName}>{item.strMeal}</Text>
//         <Text style={styles.dishPrice}>$9.99</Text>
//       </View>
//       <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
//         <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   dishImage: {
//     width: 150,
//     height: 150,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
//   dishInfo: {
//     flex: 1,
//     width: '100%',
//     paddingHorizontal: 8,
//   },
//   dishName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   dishPrice: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//   },
//   addToCartButton: {
//     backgroundColor: '#FF5722',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 4,
//     marginTop: 8,
//   },
//   addToCartButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// // ... (export statement)

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function DishItem({ item, onAddToCart }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.strMealThumb }} style={styles.dishImage} />
      <Text style={styles.dishName}>{item.strMeal}</Text>
      <Text style={styles.dishPrice}>$ 9.99</Text>
      <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
        <Text style={styles.addButtonLabel}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 3,
    alignItems: 'center',
    padding: 8,
  },
  dishImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
  },
  dishPrice: {
    fontSize: 16,
    color: '#FF5722',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#FF5722',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  addButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});



