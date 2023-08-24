// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function CartItem({ item, onRemove }) {
//   return (
//     <View style={styles.cartItem}>
//       <Text style={styles.cartItemName}>{item.strMeal}</Text>
//       <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//       <Text style={styles.cartItemPrice}>Price: ${parseFloat(item.price) * item.quantity}</Text>
//       <TouchableOpacity
//         style={styles.removeCartItemButton}
//         onPress={onRemove}
//       >
//         <Text style={styles.removeCartItemButtonText}>Remove</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   cartItem: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cartItemQuantity: {
//     color: '#666',
//   },
//   cartItemPrice: {
//     color: '#666',
//   },
//   removeCartItemButton: {
//     marginTop: 8,
//     backgroundColor: '#FF5722',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   removeCartItemButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function CartItem({ item, onRemove }) {
//   return (
//     <View style={styles.cartItem}>
//       <Text style={styles.cartItemName}>{item.strMeal}</Text>
//       <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//       <Text style={styles.cartItemPrice}>Price: ${parseFloat(item.price) * item.quantity}</Text>
//       <TouchableOpacity
//         style={styles.removeCartItemButton}
//         onPress={onRemove}
//       >
//         <Text style={styles.removeCartItemButtonText}>Remove</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cartItem: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cartItemQuantity: {
//     color: '#666',
//   },
//   cartItemPrice: {
//     color: '#666',
//   },
//   removeCartItemButton: {
//     marginTop: 8,
//     backgroundColor: '#FF5722',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   removeCartItemButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function CartItem({ item, onRemove }) {
//   return (
//     <View style={styles.cartItem}>
//       <Text style={styles.cartItemName}>{item.strMeal}</Text>
//       <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//       <Text style={styles.cartItemPrice}>Price: ${parseFloat(item.price) * item.quantity}</Text>
//       <TouchableOpacity
//         style={styles.removeCartItemButton}
//         onPress={onRemove}
//       >
//         <Text style={styles.removeCartItemButtonText}>Remove</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cartItem: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cartItemQuantity: {
//     color: '#666',
//   },
//   cartItemPrice: {
//     color: '#666',
//   },
//   removeCartItemButton: {
//     marginTop: 8,
//     backgroundColor: '#FF5722',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   removeCartItemButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ item, onRemove }) {
  const totalPrice = parseFloat(item.price) * item.quantity;

  return (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.strMeal}</Text>
      <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.cartItemPrice}>Price: ${totalPrice.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.removeCartItemButton}
        onPress={onRemove}
      >
        <Text style={styles.removeCartItemButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemQuantity: {
    color: '#666',
  },
  cartItemPrice: {
    color: '#666',
  },
  removeCartItemButton: {
    marginTop: 8,
    backgroundColor: '#FF5722',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  removeCartItemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

