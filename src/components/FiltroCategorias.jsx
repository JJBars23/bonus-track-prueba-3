export function FiltroBusqueda({ categoria, onCategoriaChange, texto, onTextoChange }) {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      
      {/* Perilla de Categoría */}
      <select 
        value={categoria} 
        onChange={(e) => onCategoriaChange(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Entrada">Entrada</option>
        <option value="Fondo">Fondo</option>
        <option value="Postre">Postre</option>
      </select>

      {/* Entrada de Texto */}
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => onTextoChange(e.target.value)} 
        placeholder="Buscar receta..."
      />
      
    </div>
  )
}