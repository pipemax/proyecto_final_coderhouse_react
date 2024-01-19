import { useContext, useEffect } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import NoDataFound from '../NoDataFound/NoDataFound';
import { SearchContext } from '../../context/SearchContext';

const ItemListContainer = ({ greeting }) => {
    const { products, loadingProducts, getProducts, getProductsByCategory,getProductsBySearch } = useGetProducts();

    const { categoryName } = useParams()

    const { searchTerm } = useContext(SearchContext);

    useEffect(() => {
        if(searchTerm) {
            getProductsBySearch(searchTerm, categoryName)
        } else {
            const productFunction = categoryName ? getProductsByCategory : getProducts
            productFunction(categoryName)
        }

    }, [categoryName, searchTerm])

    return (
        <div className="container">
            <h1 className="d-flex flex-column align-items-center">{greeting}</h1>
            {                
                loadingProducts ? <Loader /> : (products.length > 0 ? <ItemList products={products} /> : <NoDataFound message={"Sin Resultados"}/>)
            }
        </div>
    )
}

export default ItemListContainer;