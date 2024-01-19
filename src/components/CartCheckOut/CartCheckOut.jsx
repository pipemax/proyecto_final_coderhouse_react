import { NavLink } from "react-router-dom"

const CartCheckOut = ({ productQuantity, totalInvoiceQuantity, children }) => {

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Resumen de Compra</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Cantidad de Productos
                                <span>{productQuantity}</span>
                            </li>
                            <hr className="my-4" />
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total a Pagar</strong>
                                </div>
                                <span>
                                    <strong>${totalInvoiceQuantity}</strong>
                                </span>
                            </li>
                        </ul>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCheckOut