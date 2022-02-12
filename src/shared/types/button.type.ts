import { RectButtonProps } from "react-native-gesture-handler";

export type ButtonProps = RectButtonProps & {
    title: string;
    totalPrice?: string;
}

export type ButtonQuantityProps = RectButtonProps & {
    title: string;
    quantity: string;
    price: string;
    minusPress: () => void;
    plusPress: () => void;
    confirmPress: () => void;
}