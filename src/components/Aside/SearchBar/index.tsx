// STYLES IMPORTS
import Button from '../../Button';
import './styles.scss';

function SearchBar() {
  return (
    <section className="aside__search">
      <form action="" className="search-form">
        <h2 className="aside__title">Rechercher</h2>
        <input className="input search" type="text" placeholder="Rechercher" />
        <Button isSubmit onClickHandler={() => { console.log('click'); }} value="Rechercher" />
      </form>
    </section>
  );
}

export default SearchBar;
