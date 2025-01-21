import React from 'react';
 import ProductCardWithOption from '../../ui/order/ProductCardWithOption';
import { Product } from '@/src/types/product/Product';
 import ModelSetNote from '../confirmation/ModelSetNote';

const CardProduct = ({ item}:{item:Product}) => {
 
    return (
        <>
            <ProductCardWithOption item={item} confirmation={true}>
                <ModelSetNote productId={item?.id} key={item.id}/>
            </ProductCardWithOption>
        </>
    );
};

export default CardProduct;
 