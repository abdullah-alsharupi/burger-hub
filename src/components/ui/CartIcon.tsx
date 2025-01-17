import { useCartStore } from "@/src/store/cart/cartStore";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon set


const CartIcon = () => {
  const { cart } = useCartStore(state => state);

      return (
        <TouchableOpacity style={styles.containeer} onPress={()=>router.navigate('/(drawer)/order/cart')}>
          
          <Icon name="shopping-cart" size={24} color="black" />
          {cart.totalQuantity > 0 && (
            <View style={styles.badge} >
              <Text style={styles.badgeText}>{cart?.totalQuantity}</Text>
            </View>
          )}
      
        </TouchableOpacity>
      );
  };
const styles = StyleSheet.create({

    titleText: {
      fontSize: 30,
      color: 'black',
    },  containeer: {
        width:40,
       zIndex:999,
       marginRight:20
     },
    badge: {
      position: 'absolute',
      right: 3,
      top: -5,
      backgroundColor: '#AF042C',
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
      height:25
      
    },
    badgeText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default CartIcon;