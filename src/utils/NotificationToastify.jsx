import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class NotificationToastify{

    static notifySuccess = (mensaje) => {
        toast.success(mensaje, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }

    static notifyError = (mensaje) => {
        toast.error(mensaje, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }
}

export default NotificationToastify;