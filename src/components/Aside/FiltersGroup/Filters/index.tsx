// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Input from '../../../Input';

// INTERFACE
interface FiltersProps {
  category: string;
  items: string[];
}

function Filters({ category, items }: FiltersProps) {
  return (
    <section className="aside__filter">
      <h2 className="aside__title--sub">
        {`Par ${category}`}
      </h2>
      {
        items.map((item) => (
          <Input type="checkbox" value={item} key={item} />
        ))
      }

    </section>
  );
}

export default Filters;
