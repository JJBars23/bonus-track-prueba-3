import { useState } from 'react'
import './App.css'
import { recetas } from './data/recetas'
import { ListaRecetas } from './components/ListaRecetas'
import { FiltroBusqueda } from './components/FiltroCategorias'

function App() {
  const [categoria, setCategoria] = useState('Todas')
  const [texto, setTexto] = useState('')

  const normalizarTexto = (valor = '') =>
    valor
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, '')
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase()

  const manejarTexto = (valor) => {
    const textoValidado = normalizarTexto(valor)
    setTexto(textoValidado)
  }

  const recetasFiltradas = recetas.filter((receta) => {
    const pasaCategoria = categoria === 'Todas' || receta.categoria === categoria
    const textoBusqueda = normalizarTexto(texto)
    const nombreNormalizado = normalizarTexto(receta.nombre)
    const pasaTexto = textoBusqueda === '' || nombreNormalizado.includes(textoBusqueda)

    return pasaCategoria && pasaTexto
  })

  const cantidadVegetarianas = recetas.filter((receta) => receta.esVegetariana).length

  return (
    <main className="App">
      <h1>Recetario</h1>

      <FiltroBusqueda
        categoria={categoria}
        onCategoriaChange={setCategoria}
        texto={texto}
        onTextoChange={manejarTexto}
      />

      <p style={{ marginBottom: '16px', fontWeight: '600' }}>
        Recetas vegetarianas: {cantidadVegetarianas}
      </p>

      {recetasFiltradas.length === 0 ? (
        <p>No hay recetas que conicidan</p>
      ) : (
        <ListaRecetas recetas={recetasFiltradas} />
      )}
    </main>
  )
}

export default App
