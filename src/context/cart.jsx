import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const AddToCart = (product) => {
        const existingItem = cart.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }

        toast("Product Added to Cart!")
    };

    function SubToCart(product) {
        const existingItem = cart.map((item) => item.id === product.id);

        if (existingItem) {
            setCart(cart.map((item) => (
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            )))
        } else {
            return
        }
    }

    function RemoveFromCart(product) {
        const index = cart.findIndex((item) => item.id === product.id);

        if (index === -1) {
            return { success: false, message: "Product not found!" };
        }

        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== product.id)
        );

        return { success: true, message: "Product removed!" };
    }

    return <CartContext.Provider value={{ AddToCart, cart, SubToCart, RemoveFromCart }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => {
    return useContext(CartContext);
}

