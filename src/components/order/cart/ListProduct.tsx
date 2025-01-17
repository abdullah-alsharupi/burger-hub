import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardProduct from './CardProduct'; 
import ItemsHidden from './ItemsHidden'; 
import { useCartStore } from '@/src/store/cart/cartStore';
import Button from '../../ui/Button';
import { Product } from '@/src/types/product/Product';
import OrderDialog from './ModelOrderType';
import Header from './Header';
import NotFoundproduct from './NotFoundproduct';

const {height}=Dimensions.get("screen");

const ListProduct: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const closeDialog = () => { setDialogVisible(!dialogVisible) };
    const { cart } = useCartStore(state => state);
    const products: Product[] = cart.products;
    console.log("I'm cart ", cart);

    return (
        <>
            {cart.products.length !== 0 ? (
                <SafeAreaView style={styles.safeArea}>
                    <Header />
                    <SwipeListView
                        data={products}
                        renderItem={({ item }) => <CardProduct item={item} key={item.id} />}
                    
                        renderHiddenItem={({ item, index }, rowMap) => <ItemsHidden item={item} rowMap={rowMap} key={index} />}
                        rightOpenValue={-105}
                        keyExtractor={item=>item.id}
                        disableRightSwipe
                    />
                     <OrderDialog visible={dialogVisible} onClose={closeDialog} />
                    <View style={styles.buttonContainer}>
                        <Button title='Complete order' size='large' color='red' onClick={closeDialog} />
                    </View>
                </SafeAreaView>
            ):<NotFoundproduct/>

            
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

export default ListProduct;