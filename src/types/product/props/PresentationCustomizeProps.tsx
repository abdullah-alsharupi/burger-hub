import { Option } from "../Customize";

export interface PresentationCustomizeProps {
    isPressed: boolean;
    handlePress: () => void;
    data: {
      products: {
        id: string;
        imageurl: string;
        name: string;
        price: number;
      };
      options: Option[];
    };
  }