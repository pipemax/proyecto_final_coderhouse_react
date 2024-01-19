import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarSearch from './components/NavBarSearch/NavBarSearch';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify'
import { SearchProvider } from './context/SearchContext';
import CheckOut from './components/CheckOut/CheckOut';

function App() {

    

	return (
		<>
            <BrowserRouter>
                <CartProvider>
                    <SearchProvider>
                        <NavBar>
                            <ToastContainer />
                            <NavBarSearch />
                            <CartWidget />
                        </NavBar>
                        <Routes>
                            <Route path='/' element={<ItemListContainer greeting={"Listado de Productos"}/>}/>
                            <Route path='/category/:categoryName' element={<ItemListContainer greeting={"Filtrando por Categoría"}/>}/>
                            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/checkout' element={<CheckOut/>}/>
                            <Route path='*' element={<NotFound />}/>
                        </Routes>
                    </SearchProvider>
                </CartProvider>
            </BrowserRouter>
		</>
	)
}

export default App;
