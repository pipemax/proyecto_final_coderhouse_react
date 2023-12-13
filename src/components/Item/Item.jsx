import { Link } from 'react-router-dom';
import classes from './Item.module.css'

const Item = ({ id, name, price, img, stock }) => {
    return(
        <div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <img src={img} className={`card-img-top ${classes.img_custom}`} alt={name}/>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><h5>{name}</h5></li>
                            <li>Precio: {price}</li>
                            <li>Stock: {stock}</li>
                        </ul>
                        <Link to={`/item/${id}`} className="w-100 btn btn-lg btn-outline-primary">Ver Detalle</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;