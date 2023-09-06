// STYLES IMPORTS
import Button from '../../Button';
import Input from '../../Input';
import './styles.scss';

function SearchBar() {
  const handleSearchInput = (): void => {
    throw new Error('Function not implemented.');
  };

  return (
    <section className="aside__search">
      <form
        action=""
        className="search-form">
        <h2 className="aside__title">Rechercher</h2>
        <Input
          type="text"
          value=""
          onChange={handleSearchInput}
        />
        <Button
          isSubmit
          value="Rechercher"
        />
      </form>
    </section>
  );
}

export default SearchBar;
