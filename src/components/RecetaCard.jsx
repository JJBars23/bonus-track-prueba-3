export function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {

  let colorFondo;
  if (categoria === "Entrada") {
    colorFondo = "lightblue";
  } else if (categoria === "Fonde") {
    colorFondo = "lightgreen";
  } else if (categoria === "Postre") {
    colorFondo = "lightpink";
  }

  return (
    <div className="receta-card" style={{ backgroundColor: colorFondo }}>
      <h2>{nombre}</h2>
      <p>Origen: {origen}</p>
      <p>Porciones: {porciones}</p>
      <p>Categoría: {categoria}</p>
      <p>Descripción: {descripcion}</p>
      <p>Ingredientes: {ingredientes.join(', ')}</p>
      <p>Vegetariana: {esVegetariana ? 'Sí' : 'No'}</p>
    </div>
  );
}