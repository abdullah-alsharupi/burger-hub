// types.ts

import { Option } from "./Customize";

 
  
  export interface Product {
    id: string;
    quantity: string | number; 
    price: string | number;  
    options: Option[];
  }
  
