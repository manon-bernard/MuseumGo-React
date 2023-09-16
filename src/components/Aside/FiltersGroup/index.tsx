// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import { useState } from 'react';
import Filters from './Filters';
import { useAppSelector } from '../../../hooks/redux';

function FiltersGroup() {
  const [isHiddenFilters, setIsHiddenFilters] = useState<boolean>(true);
  // STORE DATA
  const regions = useAppSelector((state) => state.museum.regions);
  // const domains = useAppSelector((state) => state.museum.domains);

  return (
    <section className="aside__filter-group">
      <form className="filter-form">
        <button
          type="button"
          className="button"
          onClick={() => setIsHiddenFilters(!isHiddenFilters)}
        >
          <h2>Filtrer &gt;</h2>
        </button>
        {isHiddenFilters ? (
          ''
        ) : (
          <Filters
            category="région"
            items={regions}
          />
        )}
      </form>
    </section>
  );
}

export default FiltersGroup;
