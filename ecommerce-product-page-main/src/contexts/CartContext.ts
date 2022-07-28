import { createContext } from "react";

type Cart = {
  imageUrl: string;
  name: string;
  price: number;
}[];

export interface ICartContext {
  cart: Cart | undefined;
  setCart: (cart: any) => void;
}

const CartContext = createContext<ICartContext>({
  cart: undefined,
  setCart: () => {},
});

export default CartContext;
