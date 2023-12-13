import Item from "../Item/Item";

const ItemList = ({ products }) => {
    
    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                products.map((product) => <Item key={product.id} {...product} />)
            }
        </div>
    )
}

export default ItemList;