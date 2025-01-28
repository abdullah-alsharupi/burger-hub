
import { Option } from "@/src/types/product/Customize";
import { products } from "@/src/types/product/Product";
import { PaymentMethod } from "@/src/types/schema/enums";
import { StateCreator } from "zustand";
export enum OrderType {
    delivery = 'delivery',
    pickup = 'pick up',
  }
  export enum PaymentType {
    Visa = 'visa',
    SuperVisa = 'super visa',
    PayPal ='paypal'
  }
export type CartType = {
    productss: products[];
    orderType: OrderType.pickup | OrderType.delivery;
    paymentId: string;
    addressId: string |null;
    totalQuantity:number;
    totalAmount:number
    paymentType:PaymentMethod

}; 

export type CartState = {
    cart: CartType;
    addproducts: (products: products) => void;
    increaseQuantity: (productsId: string) => void;
    decreaseQuantity: (productsId: string) => void;
    removeproducts: (productsId: string) => void;
    removeCart: () => void;
    addOption: (products: products) => void;
    deleteOption: (productsId: string, modifireId: string, modifireOption: string) => void;
    getproductsOptions: (productsId: string) => Option[] | null;
    getTotalproductss: () => number; // New method to get total unique productss
    changeOrderType: (orderType: OrderType.delivery | OrderType.pickup) => void; // New method
    totalPrice: () => number;
    setAddressId: (IdAddress: string) =>void;
    setPayment:(IdPayment: string , paymentType:PaymentType.PayPal | PaymentType.SuperVisa | PaymentType.Visa) =>void;
    setNote:(productsId:string , note:string) =>void;
    getNote:(productsId:string)=>string | null;

};export const createCartSlice: StateCreator<CartState> = (set, get) => ({
    cart: {
      productss:[],
        orderType: OrderType.delivery, 
        paymentId: "",
        addressId: null,
        totalAmount:0,
        totalQuantity:0,
        paymentType : 'cash',

    },
    
    addproducts: (products) => {
        const { cart } = get();
        const alreadyInCart = cart.productss.find((p) => p.id === products.id);
        if (alreadyInCart) return get().increaseQuantity(products.id);
         set({ cart: { ...cart, productss: [{ ...products, quantity: 1 }, ...cart.productss] } });
         get().totalPrice();
    },
    
    increaseQuantity: (productsId) => {
        const { cart } = get();
        const updatedproductss = cart.productss.map((p) =>
            p.id === productsId
                ? { ...p, quantity: (p.quantity || 0) + 1 }
                : p
        );
        set({ cart: { ...cart, productss: updatedproductss } });
        get().totalPrice();

 
    },
    
    decreaseQuantity: (productsId) => {
        const { cart } = get();
        const updatedproductss = cart.productss.reduce((acc, p) => {
            if (p.id === productsId) {
                if (p.quantity > 1) {
                    acc.push({ ...p, quantity: p.quantity - 1 });
                }
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as products[]);

        set({ cart: { ...cart, productss: updatedproductss } });
        get().totalPrice();

    },
    
    removeproducts: (productsId) => {
        const { cart } = get();
        const updatedproductss = cart.productss.filter((p) => p.id !== productsId);
        set({ cart: { ...cart, productss: updatedproductss } });
        get().totalPrice();
        get().getTotalproductss();


    },
    
    removeCart: () => set({ cart: { productss: [], orderType: OrderType.delivery, paymentId: "", addressId: "" ,totalAmount:0,totalQuantity:0,paymentType:PaymentType.PayPal} }),

    addOption: (products: products) => {
        const { cart } = get();
        const existingproductsIndex = cart.productss.findIndex(p => p.id === products.id);
        
        if (existingproductsIndex !== -1) {
            const existingproducts = cart.productss[existingproductsIndex];
            const updatedOptions = existingproducts.options.map(option => {
                const newOptions = products.options.filter(o => o.modifireId === option.modifireId);
                return {
                    ...option,
                    modifireOptions: [
                        ...option.modifireOptions,
                        ...newOptions.flatMap(opt => 
                            opt.modifireOptions.map(modOpt => ({
                                modifierOptionId: modOpt.modifierOptionId,
                                modifierOptionName: modOpt.modifierOptionName,
                                modifierOptionPrice: modOpt.modifierOptionPrice
                            }))
                        )
                    ].filter((opt, index, self) => 
                        index === self.findIndex(o => o.modifierOptionId === opt.modifierOptionId)
                    )
                };
            });

            const updatedproducts: products = {
                ...existingproducts,
                options: updatedOptions,
            };

            const updatedproductss = cart.productss.map((p, index) => 
                index === existingproductsIndex ? updatedproducts : p
            );

            set({ cart: { ...cart, productss: updatedproductss } });
            console.log("Updated Cart:", updatedproductss);
        } else {
            const newproducts: products = {
                ...products,
                options: products.options,
            };

            set({ cart: { ...cart, productss: [...cart.productss, newproducts] } });
            console.log("Updated Cart:", [...cart.productss, newproducts]);
        }
    },
    
    deleteOption: (productsId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedproductss = cart.productss.map((p) => {
            if (p.id === productsId) {
                const updatedOptions = p.options.map((option) => {
                    if (option.modifireId === modifireId) {
                        return {
                            ...option,
                            modifireOptions: option.modifireOptions.filter(
                                (o) => o.modifierOptionId !== modifireOption
                            )
                        };
                    }
                    return option;
                }).filter(option => option.modifireOptions.length > 0);
                return { ...p, options: updatedOptions };
            }
            return p;  
        });
    
        set({ cart: { ...cart, productss: updatedproductss } });
        get().totalPrice();

    },

    getproductsOptions: (productsId) => {
        const { cart } = get();
        const products = cart.productss.find(p => p.id === productsId);
        console.log("im in getproductsOptions", products?.options);
        return products ? products.options : null; 
    },

    // New method to get total unique productss
    getTotalproductss: () => {
        const { cart } = get();
        const totalQuantity= cart.productss.length; 
        set({ cart: { ...cart, totalQuantity } });

        return totalQuantity;
    },
    changeOrderType: (orderType) => {
        const { cart } = get();
        set({ cart: { ...cart, orderType } });

    },
    totalPrice: () => {
        const { cart } = get();
        const totalAmount = cart.productss.reduce((total, products) => {
            const productsPrice = products.price || 0; // Ensure price is defined
            const productsQuantity = products.quantity || 1; // Default to 1 if quantity is undefined
    
             const modifierOptionsTotal = (products.options || []).reduce((sum, option) => {
                const optionTotal = (option.modifireOptions || []).reduce((optionSum, modifier) => {
                    const modifierOptionPrice = modifier.modifierOptionPrice || 0;  
                    return optionSum + modifierOptionPrice; // Sum the prices of each modifier option
                }, 0);
                return optionTotal ; // Add the option total to the overall sum
            }, 0);
    
            // Calculate total for this products including modifier options
            const productsTotal = (productsPrice + modifierOptionsTotal) * productsQuantity;
    
            return total + productsTotal; // Add the products total to the overall total
        }, 0);
    
        // Update the cart with the new total amount
        set({ cart: { ...cart, totalAmount } });
        get().getTotalproductss();
    
        return totalAmount;
    },
    setAddressId: (idNumber: string) => {
        const { cart } = get();
        set({ cart: { ...cart, addressId: idNumber } });
        get().getTotalproductss();

    },

    setPayment: (IdPayment: string ,paymentType : PaymentType.PayPal | PaymentType.SuperVisa | PaymentType.Visa) => {
        const { cart } = get();
        set({ cart: { ...cart, paymentId: IdPayment , paymentType:paymentType } });
    },setNote: (productsId:string,note:string)=>{
        const { cart } = get();
        const updatedproductss = cart.productss.reduce((acc, p) => {
            if (p.id === productsId) {
                     acc.push({ ...p, note: note });
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as products[]);

        set({ cart: { ...cart, productss: updatedproductss } });
     },getNote: (productsId: string) => {
        const { cart } = get();
        const products = cart.productss.find(p => p.id === productsId);
        return products ? products.note : null; 
    }
});