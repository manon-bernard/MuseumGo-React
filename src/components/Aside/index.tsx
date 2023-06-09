// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import SearchBar from './SearchBar';
import FiltersGroup from './FiltersGroup';

function Aside() {
  return (
    <aside className="aside">
      <SearchBar />
      <FiltersGroup />
    </aside>
  );
}

export default Aside;
