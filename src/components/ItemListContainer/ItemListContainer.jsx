import classes from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <h1 className={classes.heading1_style}>{greeting}</h1>
    )
}

export default ItemListContainer;