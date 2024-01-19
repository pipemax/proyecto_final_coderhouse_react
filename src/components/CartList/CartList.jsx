import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartList = ({ products }) => {

    const { clearCart } = useContext(CartContext);

    const handleOnClearClick = () => {
        clearCart()
    }

    return (
        <div className="card mb-4">
            <div className="card-header py-3">
                <button className="btn btn-danger float-end" onClick={handleOnClearClick}>Vaciar Carrito</button>
                <h5 className="mb-0">Elementos en Carrito - {products.length} {products.length === 1 ? 'item' : 'items'}</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        products.map((product) => <CartItem key={product.id} {...product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CartList;