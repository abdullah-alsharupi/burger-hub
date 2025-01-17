import { ImageSourcePropType } from "react-native";
import { Option } from "./Customize";

export type Product = {
    id: string;
    imageurl: ImageSourcePropType
    name: string;
    price: number;
    quantity: number;
    note:string | null;
    options: Option[];
};