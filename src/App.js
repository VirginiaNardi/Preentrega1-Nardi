import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import "bulma/css/bulma.css"



function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <ItemListContainer greeting={'Bienvenidos a Spice Bazaar'}/>
    </div>
  );
}

export default App;
