import { ModifierOption, Option } from "../Customize";
 
export  interface PropsModifierList {
    modifierName: string;
    options: ModifierOption[];
    modifierId: string;
    products: {
      id: string;
      name: string;
      price: number;
      imageurl: string;
    };  
    onClick: (option: ModifierOption, modifierId: string, modifierName: string) => void;
    selectedOptions:Option[];
  }
  