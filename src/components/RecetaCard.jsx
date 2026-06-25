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
    colorFondo = 'orange';
  } else if (categoria === 'Postre') {
    colorFondo = 'lightpink';
  }

  const estiloTarjeta = {
    backgroundColor: colorFondo,
    border: esVegetariana ? '3px solid #2e7d32' : '1px solid transparent',
    position: 'relative',
    paddingTop: esVegetariana ? '36px' : '16px',
  };

  return (
    <article className="receta-card" style={estiloTarjeta}>
      {esVegetariana && (
        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: '1px solid #2e7d32',
            borderRadius: '999px',
            padding: '4px 8px',
            backgroundColor: '#e8f5e9',
            color: '#1b5e20',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.04em',
          }}
        >
          VEG
        </span>
      )}
      <h2>{nombre}</h2>
      <p><strong>Origen:</strong> {origen}</p>
      <p><strong>Porciones:</strong> {porciones}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Ingredientes:</strong> {ingredientes.join(', ')}</p>
      <p><strong>Vegetariana:</strong> {esVegetariana ? 'Sí' : 'No'}</p>
    </article>
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