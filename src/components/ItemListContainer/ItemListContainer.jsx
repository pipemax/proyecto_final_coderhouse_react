import { useEffect } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import NoDataFound from '../NoDataFound/NoDataFound';

const ItemListContainer = ({ greeting }) => {
    const { products, loadingProducts, setLoadingProducts, getProducts, getProductsByCategory } = useGetProducts();

    const { categoryName } = useParams()

    useEffect(() => {
        const productFunction = categoryName ? getProductsByCategory : getProducts
        
        setLoadingProducts(true)
        productFunction(categoryName)

    }, [categoryName])

    return (
        <div className="container">
            <h1 className="d-flex flex-column align-items-center">{greeting}</h1>
            {                
                loadingProducts ? <Loader /> : (products.length > 0 ? <ItemList products={products} /> : <NoDataFound />)
            }
        </div>
    )
}

export default ItemListContainer;