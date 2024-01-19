import CartList from "../CartList/CartList";
import CartCheckOut from "../CartCheckOut/CartCheckOut";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import NoDataFound from "../NoDataFound/NoDataFound";
import { NavLink } from "react-router-dom";

const Cart = () => {
    
    const { cart, totalInvoice, totalQuantity } = useContext(CartContext);
    
    return (
        <section className="h-100 gradient-custom">
            <div className="container py-3">
                <div className="row d-flex justify-content-center">
                    <h1>Carrito de Compras</h1>
                    {
                        cart.length > 0 ?
                        <>
                            <div className="col-md-8">
                                <CartList products={cart}/>
                            </div>                            
                            <div className="col-md-4">
                                <CartCheckOut productQuantity={totalQuantity} totalInvoiceQuantity={totalInvoice}>
                                    <NavLink to={'/checkout'} type="button" className="btn btn-primary">
                                        Proceder al Pago
                                    </NavLink>
                                </CartCheckOut>
                            </div>
                        </>
                        :
                        <NoDataFound message={"No hay elementos en el carrito"} />
                    } 
                </div>
            </div>
        </section>
    )
}

export default Cart;