// types.ts

import { Option } from "./Customize";

 
  
  export interface products {
    id: string;
    quantity: string | number; 
    price: string | number;  
    options: Option[];
  }
  
