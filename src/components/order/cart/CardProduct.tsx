import React from 'react';
 import ProductCardWithOption from '../../ui/order/ProductCardWithOption';
import { Product } from '@/src/types/product/Product';
import IncereaseDecrease from './IncereaseDecrease';
type Props = {
    item: Product;
};
const CardProduct: React.FC<Props> = ({ item,  }) => {
 
    return (
        <>
            <ProductCardWithOption item={item}>
                <IncereaseDecrease id={item?.id} quantity={item?.quantity}/>
            </ProductCardWithOption>
        </>
    );
};

export default CardProduct;
 