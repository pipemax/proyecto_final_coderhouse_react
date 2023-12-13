import { useEffect } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { products, loadingProducts, getProductById } = useGetProducts()

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
    }, [itemId])

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-12 mb-3 text-center">
                { loadingProducts ? <Loader/> : <ItemDetail {...products}/> } 
            </div>
        </div>  
    )
}

export default ItemDetailContainer;