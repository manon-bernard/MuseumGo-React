// STYLES IMPORTS
import Button from '../../Button';
import Input from '../../Input';
import './styles.scss';

function SearchBar() {
  return (
    <section className="aside__search">
      <form action="" className="search-form">
        <h2 className="aside__title">Rechercher</h2>
        <Input type="text" value="" />
        <Button isSubmit value="Rechercher" />
      </form>
    </section>
  );
}

export default SearchBar;
