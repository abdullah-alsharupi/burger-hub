import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import ItemsHidden from './ItemsHidden'; 
import { useCartStore } from '@/src/store/cart/cartStore';
import Button from '../../ui/Button';
import OrderDialog from './ModelOrderType';
import Header from './Header';
import { products } from '@/src/types/product/Product';
import Cardproducts from './CardProduct';
import NotFoundproducts from './NotFoundproduct';

const {height}=Dimensions.get("screen");

const Listproducts: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const closeDialog = () => { setDialogVisible(!dialogVisible) };
    const { cart } = useCartStore(state => state);
    const productss: products[] = cart.productss;
    console.log("I'm cart ", cart);

    return (
        <>
            {cart.productss.length !== 0 ? (
                <SafeAreaView style={styles.safeArea}>
                    <Header />
                    <SwipeListView
                        data={productss}
                        renderItem={({ item }) => <Cardproducts item={item}  />}
                    
                        renderHiddenItem={({ item, index }, rowMap) => <ItemsHidden item={item} rowMap={rowMap} />}
                        rightOpenValue={-105}
                        keyExtractor={item=>item.id}
                        disableRightSwipe
                    />
                     <OrderDialog visible={dialogVisible} onClose={closeDialog} />
                    <View style={styles.buttonContainer}>
                        <Button title='Complete order' size='large' color='red' onClick={closeDialog} />
                    </View>
                </SafeAreaView>
            ):<NotFoundproducts/>

            
            }
         
        </>
    );
};

const styles = StyleSheet.create({
 
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
     },
    buttonContainer: {
        height: 60,
        width: "100%",
        marginBottom: 20,
     },
});

export default Listproducts;