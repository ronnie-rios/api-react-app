import { createContext, useState } from "react";

const CartContext = createContext({
    cart: [],
    setCart:()=>{}
})

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <CartContext.Provider value={{
            cart: [],
            setCart: addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }