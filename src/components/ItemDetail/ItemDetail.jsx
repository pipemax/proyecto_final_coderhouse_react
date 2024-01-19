import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem, getItem } = useContext(CartContext);

    const navigate = useNavigate()

    useEffect(() => {
        const itemInCart = getItem(id)
        if(itemInCart) {
            setQuantityAdded(itemInCart.quantity)
        }
    }, [])

    const onAddCart = (quantity) => {
        setQuantityAdded(quantity)
        addItem({id, name, price, img}, quantity)
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
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                                {
                                    quantityAdded > 0 ?
                                        <Link to='/cart' className="btn btn-success m-2">
                                            Finalizar Compra
                                        </Link>
                                    :
                                    <ItemCount key={id} initialValue={1} stock={stock} onCallback={onAddCart}/>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                                <button className='btn btn-info' onClick={() => navigate(`/category/${category}`)}>
                                    Volver
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail