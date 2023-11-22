import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartWidget.module.css"

const CartWidget = () => {
    const itemQuantity = 2;

    return (
        <div className="justify-content-center me-md-2 ms-md-2">
            <button className={`btn btn-primary ${classes.button_full_width}`} type="button">
                <FontAwesomeIcon icon={faCartShopping}/> {itemQuantity}
            </button>
        </div>
    )
}

export default CartWidget;