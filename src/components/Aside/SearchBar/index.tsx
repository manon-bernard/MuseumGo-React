// STYLES IMPORTS
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setSearchString, submitSearch } from '../../../store/reducers/museum';
import Button from '../../Button';
import Input from '../../Input';
import './styles.scss';

function SearchBar() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.museum.searchValue);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchString(e.target.value));
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitSearch());
  };

  return (
    <section className="aside__search">
      <form
        action=""
        className="search-form"
        onSubmit={handleSearchSubmit}
      >
        <h2 className="aside__title">Rechercher</h2>
        <Input
          type="text"
          value={searchValue}
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

// TODO: pagination, favorites
