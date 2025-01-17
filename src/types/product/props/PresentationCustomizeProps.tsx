import { Option } from "../Customize";

export interface PresentationCustomizeProps {
    isPressed: boolean;
    handlePress: () => void;
    data: {
      product: {
        id: string;
        imageurl: string;
        name: string;
        price: number;
      };
      options: Option[];
    };
  }