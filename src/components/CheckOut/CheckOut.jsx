import CartCheckOut from "../CartCheckOut/CartCheckOut";
import NoDataFound from "../NoDataFound/NoDataFound";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, query, where, documentId, addDoc, writeBatch } from "firebase/firestore";
import NotificationToastify from "../../utils/NotificationToastify";
import Loader from "../Loader/Loader";


const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, totalInvoice, totalQuantity, clearCart } = useContext(CartContext);

    const createOrder = async ({name, email, phone}) => {
        setLoading(true);
           
        const orderObject = {
            buyer: {
                name, email, phone
            },
            items: cart,
            total: totalInvoice
        }

        const batch = writeBatch(db)

        const ids = cart.map(product => product.id);
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
        const outOfStock = []
        try {
            const { docs } = await getDocs(productsCollection);
            docs.forEach(document => {
                const dataDocument = document.data()
                const stockInDatabase = dataDocument.stock

                const productInCart = cart.find(product => product.id === document.id);
                const productQuantity = productInCart.quantity

                if(stockInDatabase >= productQuantity) {
                    batch.update(document.ref, {stock: stockInDatabase - productQuantity})
                } else {
                    outOfStock.push({id: document.id, ...dataDocument})
                }
            })
        } catch(error) {
            NotificationToastify.notifyError('Ha ocurrido un error al recuperar los productos desde el servidor');
        }
        
        if(outOfStock.length === 0) {
            try {
                batch.commit()
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, orderObject)
                setOrderId(id)
                clearCart();
            } catch(error) {
                NotificationToastify.notifyError('Ha ocurrido un error al generar la orden');
            }
        } else {
            NotificationToastify.notifyError('Uno o más productos del carrito sobrepasan el stock');
        }

        setLoading(false);
    }

    if(loading) {
        return <Loader />
    }


    return (
        <section className="h-100 gradient-custom">
            <div className="container py-3">
                <div className="row d-flex justify-content-center">
                    <h1>CheckOut</h1>
                    {
                        orderId ? 
                            <h1>
                                El id de su orden es: {orderId}
                            </h1> 
                            : 
                            <>
                                {
                                    cart.length > 0 ?
                                    <>                            
                                        <div className="col-md-8">
                                            <CheckOutForm onConfirm={createOrder}/>
                                        </div>
                                        <div className="col-md-4">
                                            <CartCheckOut productQuantity={totalQuantity} totalInvoiceQuantity={totalInvoice}/>
                                        </div>
                                    </>
                                    :
                                    <NoDataFound message={"Para avanzar a este apartado debe tener elementos en el carro de compras"} />
                                }
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

export default CheckOut;