// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Input from '../../../Input';

// TYPES
import { Facet } from '../../../../@types/data';
import createCompareFn from '../../../../utils/compareFn';
import { useAppDispatch } from '../../../../hooks/redux';
import { setChecked } from '../../../../store/reducers/museum';

// INTERFACE
interface FiltersProps {
  category: string;
  items: Facet[];
  isHidden: boolean;
}

function Filters({ category, items, isHidden }: FiltersProps) {
  const dispatch = useAppDispatch();

  const displayedItems = [...items];
  const sortedItems = displayedItems.sort(createCompareFn('name', 'asc'));

  const handleCheck = (value: string) => {
    dispatch(setChecked(value));
  };

  return (
    <section className={`aside__filter ${isHidden ? 'visually-hidden' : ''}`}>
      <h2 className="aside__title--sub">{`Par ${category}`}</h2>
      <div className="filters__list">
        {sortedItems.map((item) => (
          <Input
            type="checkbox"
            value={item.name.toUpperCase()}
            key={item.name}
            onChange={() => handleCheck(item.name)}
          />
        ))}
      </div>
    </section>
  );
}

export default Filters;
