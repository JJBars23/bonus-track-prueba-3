import { useState } from 'react'
import './App.css'
import { recetas } from './data/recetas'
import { ListaRecetas } from './components/ListaRecetas'
import { FiltroBusqueda } from './components/FiltroBusqueda'

function App() {
  const [categoria, setCategoria] = useState('Todas')
  const [texto, setTexto] = useState('')

  const recetasFiltradas = recetas.filter(receta => {
    const pasaCategoria = categoria === 'Todas' || receta.categoria === categoria;
    const pasaTexto = receta.nombre.toLowerCase().includes(texto.toLowerCase());
    return pasaCategoria && pasaTexto;
  });

  return (
    <main className="App">
      <h1>Recetario</h1>
      
      <FiltroBusqueda 
        categoria={categoria}
        onCategoriaChange={setCategoria}
        texto={texto}
        onTextoChange={setTexto}
      />

      <ListaRecetas recetas={recetasFiltradas} />
    </main>
  )
}

export default App
