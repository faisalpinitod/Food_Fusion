
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CartItem from '../components/CartItem'; // Import your CartItem component here

export default function CheckoutScreen({ route }) {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [cart, setCart] = useState(route.params.cart);

  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.idMeal !== itemToRemove.idMeal);
    setCart(updatedCart);
  };

  const handlePayment = () => {
    // Simulate payment processing
    const success = Math.random() < 0.8; // 80% success rate

    if (success) {
      setPaymentStatus('success');
    } else {
      setPaymentStatus('failure');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutTitle}>Order Summary</Text>
        <FlatList
          data={cart}
          keyExtractor={item => item.idMeal}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onRemove={() => handleRemoveItem(item)}
            />
          )}
        />
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePayment}
        >
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
        {paymentStatus === 'success' && (
          <Text style={styles.paymentSuccessText}>Payment successful!</Text>
        )}
        {paymentStatus === 'failure' && (
          <Text style={styles.paymentFailureText}>Payment failed. Please try again.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkoutContainer: {
    padding: 16,
  },
  checkoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentButton: {
    backgroundColor: '#009688',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  paymentSuccessText: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  paymentFailureText: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
});

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import CartItem from '../components/CartItem';

// export default function CheckoutScreen({ route }) {
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [cart, setCart] = useState(route.params.cart);
//   const navigation = useNavigation();

//   const handleRemoveItem = (itemToRemove) => {
//     const updatedCart = cart.filter(item => item.idMeal !== itemToRemove.idMeal);
//     setCart(updatedCart);
//   };

//   const handlePayment = () => {
//     // Simulate payment processing
//     const success = Math.random() < 0.8; // 80% success rate

//     if (success) {
//       navigation.navigate('OrderConfirmation', {
//         orderedDishes: cart,
//         orderReference: generateOrderReference(),
//       });
//     } else {
//       setPaymentStatus('failure');
//     }
//   };

//   const generateOrderReference = () => {
//     const timestamp = new Date().getTime();
//     const randomDigits = Math.floor(Math.random() * 10000);
//     return `ORDER-${timestamp}-${randomDigits}`;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.checkoutContainer}>
//         <Text style={styles.checkoutTitle}>Order Summary</Text>
//         <FlatList
//           data={cart}
//           keyExtractor={item => item.idMeal}
//           renderItem={({ item }) => (
//             <CartItem
//               item={item}
//               onRemove={() => handleRemoveItem(item)}
//             />
//           )}
//         />
//         <TouchableOpacity
//           style={styles.paymentButton}
//           onPress={handlePayment}
//         >
//           <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//         </TouchableOpacity>
//         {paymentStatus === 'success' && (
//           <Text style={styles.paymentSuccessText}>Payment successful!</Text>
//         )}
//         {paymentStatus === 'failure' && (
//           <Text style={styles.paymentFailureText}>Payment failed. Please try again.</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   checkoutContainer: {
//     padding: 16,
//   },
//   checkoutTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   paymentButton: {
//     backgroundColor: '#009688',
//     paddingVertical: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paymentButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   paymentSuccessText: {
//     color: 'green',
//     fontWeight: 'bold',
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   paymentFailureText: {
//     color: 'red',
//     fontWeight: 'bold',
//     marginTop: 16,
//     textAlign: 'center',
//   },
// });
