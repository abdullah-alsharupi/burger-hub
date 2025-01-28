import React from 'react';

import IncereaseDecrease from './IncereaseDecrease';
import { products } from '@/src/types/product/Product';
import ProductCardWithOption from '../../ui/order/ProductCardWithOption';
type Props = {
    item: products;
};
const Cardproducts: React.FC<Props> = ({ item }) => {
 
    return (
        <>
            <ProductCardWithOption item={item}>
                <IncereaseDecrease id={item?.id} quantity={item?.quantity}/>
            </ProductCardWithOption>
        </>
    );
};

export default Cardproducts;
 