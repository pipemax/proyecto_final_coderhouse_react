import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const navigate = useNavigate()

    const onAddCart = (quantity) => {
        console.log(quantity)
    }
    
    return (
        <div>
            <br />
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <img src={img} className={`card-img-top ${classes.img_custom}`} alt={name}/>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><h5>{name}</h5></li>
                            <li>Categoría: {category}</li>
                            <li>Precio: {price}</li>
                            <li>Stock: {stock}</li>
                        </ul>
                        <div>
                            {description}
                        </div>
                        <ItemCount key={id} initialValue={1} stock={stock} onCallback={onAddCart}/>
                        <button className='btn btn-info' onClick={() => navigate(`/category/${category}`)}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail