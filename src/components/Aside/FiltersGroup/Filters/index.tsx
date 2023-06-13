// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Input from '../../../Input';

// TYPES
import { Facet } from '../../../../@types/data';
import createCompareFn from '../../../../utils/compareFn';

// INTERFACE
interface FiltersProps {
  category: string;
  items: Facet[];
}

function Filters({ category, items }: FiltersProps) {
  const displayedItems = [...items];
  const sortedItems = displayedItems.sort(createCompareFn('name', 'asc'));

  return (
    <section className="aside__filter">
      <h2 className="aside__title--sub">
        {`Par ${category}`}
      </h2>
      {
        sortedItems.map((item) => (
          <Input type="checkbox" value={item.name.toUpperCase()} key={item.name} />
        ))
      }

    </section>
  );
}

export default Filters;
