// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Filters from './Filters';
import { useAppSelector } from '../../../hooks/redux';

function FiltersGroup() {
  // STORE DATA
  const regions = useAppSelector((state) => state.museum.regions);
  // const domains = useAppSelector((state) => state.museum.domains);

  return (
    <section className="aside__filter-group">
      <form className="filter-form">
        <h2 className="aside__title">Filtrer</h2>
        <Filters
          category="région"
          items={regions}
        />
      </form>
    </section>
  );
}

export default FiltersGroup;
