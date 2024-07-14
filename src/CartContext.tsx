// import React, { createContext, useState, ReactNode } from "react";
// import { productsArray, getProductData } from "./productsStore";
// import { CartItem, CartContextType } from "./types";

// export const CartContext = createContext<CartContextType>({
//     items: [],
//     getProductQuantity: () => 0,
//     addOneToCart: () => {},
//     removeOneFromCart: () => {},
//     deleteFromCart: () => {},
//     getTotalCost: () => 0,
// });

// interface CartProviderProps {
//     children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//     const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

//     function getProductQuantity(id: string): number {
//         const quantity = cartProducts.find(product => product.id === id)?.quantity;
//         return quantity ?? 0;
//     }

//     function addOneToCart(id: string): void {
//         const quantity = getProductQuantity(id);

//         if (quantity === 0) {
//             setCartProducts([
//                 ...cartProducts,
//                 { id, quantity: 1 },
//             ]);
//         } else {
//             setCartProducts(
//                 cartProducts.map(product =>
//                     product.id === id ? { ...product, quantity: product.quantity + 1 } : product
//                 )
//             );
//         }
//     }

//     function removeOneFromCart(id: string): void {
//         const quantity = getProductQuantity(id);

//         if (quantity === 1) {
//             deleteFromCart(id);
//         } else {
//             setCartProducts(
//                 cartProducts.map(product =>
//                     product.id === id ? { ...product, quantity: product.quantity - 1 } : product
//                 )
//             );
//         }
//     }

//     function deleteFromCart(id: string): void {
//         setCartProducts(cartProducts => cartProducts.filter(product => product.id !== id));
//     }

//     function getTotalCost(): number {
//         return cartProducts.reduce((totalCost, cartItem) => {
//             const productData = getProductData(cartItem.id);
//             if (!productData) {
//                 return totalCost; // skip if productData is undefined
//             }
//             return totalCost + (productData.price * cartItem.quantity);
//         }, 0);
//     }

//     const contextValue: CartContextType = {
//         items: cartProducts,
//         getProductQuantity,
//         addOneToCart,
//         removeOneFromCart,
//         deleteFromCart,
//         getTotalCost,
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export default CartProvider;
