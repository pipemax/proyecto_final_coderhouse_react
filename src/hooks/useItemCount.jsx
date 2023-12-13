import { useState } from "react";

export const useItemCount = (stock, initialValue) => {
    const [quantity, setQuantity] = useState(initialValue);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return { quantity, increment, decrement }
}