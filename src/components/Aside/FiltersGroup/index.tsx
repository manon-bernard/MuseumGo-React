// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Filters from './Filters';

function FiltersGroup() {
  return (
    <section className="aside__filter-group">
      <form action="" className="filter-form">
        <h2 className="aside__title">Filtrer</h2>
        <Filters category="théme" items={['Art', 'Nature', 'Histoire']} />
        <Filters category="région" items={['Paris', 'Auvergne', 'Bretagne']} />
      </form>
    </section>
  );
}

export default FiltersGroup;
