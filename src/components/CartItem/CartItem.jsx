import classes from './CartItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ id, name, quantity, price, img }) => {

    const { removeItem } = useContext(CartContext);

    const handleClickRemove = () => {
        removeItem(id)
    }

    return(
        <>
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">                
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={img} className="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                        <div className={`mask ${classes.image_cart_background_color}`}></div>
                    </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{name}</strong></p>
                
                <p>Cantidad: {quantity}</p>
                <button type="button" className="btn btn-danger me-2 mb-2" data-mdb-toggle="tooltip" title="Eliminar Item" onClick={handleClickRemove}>   
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <p className="text-start text-md-center">
                    Precio Unitario: <strong>${price}</strong>
                </p>
            </div>
            <hr className="my-4" />
        </>
    )
}

export default CartItem