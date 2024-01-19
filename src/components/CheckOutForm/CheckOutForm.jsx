import { useState } from "react";

const CheckOutForm = ({onConfirm}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, email, phone
        }
        
        onConfirm(userData)
    }


    return (
        <div className="card mb-4">
            <div className="card-header py-3">
                <h5 className="mb-0">Datos del Comprador</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <form className="needs-validation" onSubmit={handleConfirm}>
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" required onChange={({target}) => setName(target.value)}/>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label className="form-label">Correo</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" required onChange={({target}) => setEmail(target.value)}/>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label className="form-label">Teléfono</label>
                                <input type="number" className="form-control" id="phone" placeholder="Ingrese su teléfono" required onChange={({target}) => setPhone(target.value)}/>
                            </div>
                        </div>
                        <br/>
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Generar Orden</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOutForm;