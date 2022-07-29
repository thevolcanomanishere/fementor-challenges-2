import { createContext } from "react";
import { IProductInfo } from "../components/ProductInfo";

type Cart = IProductInfo[];

export interface ICartContext {
  cart: Cart | undefined;
  setCart: (cart: any) => void;
}

const CartContext = createContext<ICartContext>({
  cart: undefined,
  setCart: () => {},
});

export default CartContext;
