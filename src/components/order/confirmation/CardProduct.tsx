import React from 'react';

 import ModelSetNote from '../confirmation/ModelSetNote';
import { products } from '@/src/types/product/Product';
import ProductCardWithOption from '../../ui/order/ProductCardWithOption';

const Cardproducts = ({ item}:{item:products}) => {
 
    return (
        <>
            <ProductCardWithOption item={item} confirmation={true}>
                <ModelSetNote productsId={item?.id} key={item.id}/>
            </ProductCardWithOption>
        </>
    );
};

export default Cardproducts;
 