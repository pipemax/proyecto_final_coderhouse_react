import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

	return (
		<>
			<NavBar />
            <ItemListContainer greeting="Aquí iría mi lista de productos, si tan solo tuviera una..."/>
		</>
	)
}

export default App;
