import PropTypes from 'prop-types';

export function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
  esVegetariana
}) {
  let colorFondo = 'lightgray';

  if (categoria === 'Entrada') {
    colorFondo = 'lightblue';
  } else if (categoria === 'Fondo') {
    colorFondo = 'lightgreen';
  } else if (categoria === 'Postre') {
    colorFondo = 'lightpink';
  }

  return (
    <div className="receta-card" style={{ backgroundColor: colorFondo }}>
      <h2>{nombre}</h2>
      <p><strong>Origen:</strong> {origen}</p>
      <p><strong>Porciones:</strong> {porciones}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Ingredientes:</strong> {ingredientes.join(', ')}</p>
      <p><strong>Vegetariana:</strong> {esVegetariana ? 'Sí' : 'No'}</p>
    </div>
  );
}

RecetaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  origen: PropTypes.string.isRequired,
  porciones: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
  esVegetariana: PropTypes.bool.isRequired,
};