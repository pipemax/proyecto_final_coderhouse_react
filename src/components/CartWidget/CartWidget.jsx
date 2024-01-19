import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartWidget.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);  

    return (
        <div className="justify-content-center me-md-2 ms-md-2">
            <NavLink to={'/cart'} className={`btn btn-primary ${classes.button_full_width}`} type="button">
                <FontAwesomeIcon icon={faCartShopping}/> {totalQuantity}
            </NavLink>
        </div>
    )
}

export default CartWidget;