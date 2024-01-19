import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useItemCount } from "../../hooks/useItemCount";
import classes from "./ItemCount.module.css"

const ItemCount = ({ stock, initialValue, onCallback }) => {
    
    const { quantity, increment, decrement } = useItemCount(stock, initialValue)

    return (
        <div className="container">
            <div className={`card ${classes.border_white}`}>
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center">
                        {
                            stock == 0 ? 
                                <div className="alert alert-info">Sin Stock Disponible</div>
                            :
                            <>
                                <div className="d-flex gap-3 p-2 justify-content-between align-items-center">
                                    <button className="btn" type="button" onClick={decrement}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    {quantity}
                                    <button className="btn" type="button" onClick={increment}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                                <div className="d-flex">
                                    <button className="btn btn-success" onClick={() => onCallback(quantity)}>
                                        Agregar al Carro
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;