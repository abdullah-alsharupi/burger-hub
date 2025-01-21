import { Option } from "@/src/types/product/Customize";
import { Product } from "@/src/types/product/Product";
import { PaymentMethod } from "@/src/types/schema/enums";
import { products } from "@/src/types/schema/product";
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
    products: Product[];
    orderType: OrderType.pickup | OrderType.delivery;
    paymentId: string;
    addressId: string |null;
    totalQuantity:number;
    totalAmount:number
    paymentType:PaymentMethod

}; 

export type CartState = {
    cart: CartType;
    addProduct: (product: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeProduct: (productId: string) => void;
    removeCart: () => void;
    addOption: (product: Product) => void;
    deleteOption: (productId: string, modifireId: string, modifireOption: string) => void;
    getProductOptions: (productId: string) => Option[] | null;
    getTotalProducts: () => number; // New method to get total unique products
    changeOrderType: (orderType: OrderType.delivery | OrderType.pickup) => void; // New method
    totalPrice: () => number;
    setAddressId: (IdAddress: string) =>void;
    setPayment:(IdPayment: string , paymentType:PaymentType.PayPal | PaymentType.SuperVisa | PaymentType.Visa) =>void;
    setNote:(productId:string , note:string) =>void;
    getNote:(productId:string)=>string | null;

};export const createCartSlice: StateCreator<CartState> = (set, get) => ({
    cart: {
      products:[],
        orderType: OrderType.delivery, 
        paymentId: "",
        addressId: null,
        totalAmount:0,
        totalQuantity:0,
        paymentType : 'cash',

    },
    
    addProduct: (product) => {
        const { cart } = get();
        const alreadyInCart = cart.products.find((p) => p.id === product.id);
        if (alreadyInCart) return get().increaseQuantity(product.id);
         set({ cart: { ...cart, products: [{ ...product, quantity: 1 }, ...cart.products] } });
         get().totalPrice();
    },
    
    increaseQuantity: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.map((p) =>
            p.id === productId
                ? { ...p, quantity: (p.quantity || 0) + 1 }
                : p
        );
        set({ cart: { ...cart, products: updatedProducts } });
        get().totalPrice();

 
    },
    
    decreaseQuantity: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.reduce((acc, p) => {
            if (p.id === productId) {
                if (p.quantity > 1) {
                    acc.push({ ...p, quantity: p.quantity - 1 });
                }
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as Product[]);

        set({ cart: { ...cart, products: updatedProducts } });
        get().totalPrice();

    },
    
    removeProduct: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.filter((p) => p.id !== productId);
        set({ cart: { ...cart, products: updatedProducts } });
        get().totalPrice();
        get().getTotalProducts();


    },
    
    removeCart: () => set({ cart: { products: [], orderType: OrderType.delivery, paymentId: "", addressId: "" ,totalAmount:0,totalQuantity:0,paymentType:PaymentType.PayPal} }),

    addOption: (product: Product) => {
        const { cart } = get();
        const existingProductIndex = cart.products.findIndex(p => p.id === product.id);
        
        if (existingProductIndex !== -1) {
            const existingProduct = cart.products[existingProductIndex];
            const updatedOptions = existingProduct.options.map(option => {
                const newOptions = product.options.filter(o => o.modifireId === option.modifireId);
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

            const updatedProduct: Product = {
                ...existingProduct,
                options: updatedOptions,
            };

            const updatedProducts = cart.products.map((p, index) => 
                index === existingProductIndex ? updatedProduct : p
            );

            set({ cart: { ...cart, products: updatedProducts } });
            console.log("Updated Cart:", updatedProducts);
        } else {
            const newProduct: Product = {
                ...product,
                options: product.options,
            };

            set({ cart: { ...cart, products: [...cart.products, newProduct] } });
            console.log("Updated Cart:", [...cart.products, newProduct]);
        }
    },
    
    deleteOption: (productId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedProducts = cart.products.map((p) => {
            if (p.id === productId) {
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
    
        set({ cart: { ...cart, products: updatedProducts } });
        get().totalPrice();

    },

    getProductOptions: (productId) => {
        const { cart } = get();
        const product = cart.products.find(p => p.id === productId);
        console.log("im in getProductOptions", product?.options);
        return product ? product.options : null; 
    },

    // New method to get total unique products
    getTotalProducts: () => {
        const { cart } = get();
        const totalQuantity= cart.products.length; 
        set({ cart: { ...cart, totalQuantity } });

        return totalQuantity;
    },
    changeOrderType: (orderType) => {
        const { cart } = get();
        set({ cart: { ...cart, orderType } });

    },
    totalPrice: () => {
        const { cart } = get();
        const totalAmount = cart.products.reduce((total, product) => {
            const productPrice = product.price || 0; // Ensure price is defined
            const productQuantity = product.quantity || 1; // Default to 1 if quantity is undefined
    
             const modifierOptionsTotal = (product.options || []).reduce((sum, option) => {
                const optionTotal = (option.modifireOptions || []).reduce((optionSum, modifier) => {
                    const modifierOptionPrice = modifier.modifierOptionPrice || 0;  
                    return optionSum + modifierOptionPrice; // Sum the prices of each modifier option
                }, 0);
                return optionTotal ; // Add the option total to the overall sum
            }, 0);
    
            // Calculate total for this product including modifier options
            const productTotal = (productPrice + modifierOptionsTotal) * productQuantity;
    
            return total + productTotal; // Add the product total to the overall total
        }, 0);
    
        // Update the cart with the new total amount
        set({ cart: { ...cart, totalAmount } });
        get().getTotalProducts();
    
        return totalAmount;
    },
    setAddressId: (idNumber: string) => {
        const { cart } = get();
        set({ cart: { ...cart, addressId: idNumber } });
        get().getTotalProducts();

    },

    setPayment: (IdPayment: string ,paymentType : PaymentType.PayPal | PaymentType.SuperVisa | PaymentType.Visa) => {
        const { cart } = get();
        set({ cart: { ...cart, paymentId: IdPayment , paymentType:paymentType } });
    },setNote: (productId:string,note:string)=>{
        const { cart } = get();
        const updatedProducts = cart.products.reduce((acc, p) => {
            if (p.id === productId) {
                     acc.push({ ...p, note: note });
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as Product[]);

        set({ cart: { ...cart, products: updatedProducts } });
     },getNote: (productId: string) => {
        const { cart } = get();
        const product = cart.products.find(p => p.id === productId);
        return product ? product.note : null; 
    }
});