import './App.css'
import { recetas } from './data/recetas'
import { ListaRecetas } from './components/ListaRecetas'

function App() {
  return (
    <main className="App">
      <h1>Recetario</h1>
      <ListaRecetas recetas={recetas} />
    </main>
  )
}

export default App
