import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarSearch from './components/NavBarSearch/NavBarSearch';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {

    

	return (
		<>
            <BrowserRouter>
                <NavBar>
                    <NavBarSearch />
                    <CartWidget />
                </NavBar>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={"Listado de Productos"}/>}/>
                    <Route path='/category/:categoryName' element={<ItemListContainer greeting={"Filtrando por Categoría"}/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
		</>
	)
}

export default App;
