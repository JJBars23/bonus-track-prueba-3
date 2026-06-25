import PropTypes from 'prop-types';
import { RecetaCard } from './RecetaCard';

export function ListaRecetas({ recetas }) {
  return (
    <section>
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} {...receta} />
      ))}
    </section>
  );
}

ListaRecetas.propTypes = {
  recetas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      origen: PropTypes.string.isRequired,
      porciones: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
      esVegetariana: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
