import React from 'react';
 import ProductCardWithOption from '../../ui/order/ProductCardWithOption';
import { Product } from '@/src/types/product/Product';
 import ModelSetNote from '../confirmation/ModelSetNote';
type Props = {
    item: Product;
};
const CardProduct: React.FC<Props> = ({ item,  }) => {
 
    return (
        <>
            <ProductCardWithOption item={item} confirmation>
                <ModelSetNote productId={item?.id}/>
            </ProductCardWithOption>
        </>
    );
};

export default CardProduct;
 