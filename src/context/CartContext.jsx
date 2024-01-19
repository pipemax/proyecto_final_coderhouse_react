import { createContext, useState } from "react";
import NotificationToastify from "../utils/NotificationToastify";

export const CartContext = createContext({
    cart: []
});


//Cada context, se convierte en el padre de los componentes donde se desea que aplica el contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item)) {
            setCart(prev => [...prev, {...item, quantity}])
            NotificationToastify.notifySuccess('Producto agregado con éxito', 'success')
        } else {
            NotificationToastify.notifyError('El producto ya se encuentra en el carrito', 'error')
        }
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.some((element) => element.id === item.id)
    }

    const removeItem = (id) => {
        setCart(cart.filter((element) => element.id !== id));
    }

    const getItem = (id) => {
        return cart.find((element) => element.id === id);
    }

    const calculateTotalQuantity = () => {
        let counter = 0

        cart.forEach(product => {
            counter = counter + product.quantity
        });

        return counter;
    }

    const totalQuantity = calculateTotalQuantity();

    const calculateTotalInvoice = () => {
        let total = 0

        cart.forEach(product => {
            total = total + product.price * product.quantity
        })

        return total
    }

    const totalInvoice = calculateTotalInvoice();

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getItem, totalQuantity, totalInvoice, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

