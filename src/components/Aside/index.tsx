// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import SearchBar from './SearchBar';

function Aside() {
  return (
    <aside className="aside">

      <SearchBar />
      <section className="aside__filters">
        <form action="" className="search-form">
          <h2 className="menu-label mt-2">Filtrer</h2>
          <form action="" className="filter-form">
            <fieldset className="theme-fieldset">
              <legend>Par thème:</legend>
              <label htmlFor="culture" className="checkbox-label">
                <input id="culture" type="checkbox" placeholder="culture" />
                Culture
              </label>
              <label htmlFor="art" className="checkbox-label">
                <input id="art" type="checkbox" placeholder="art" />
                Art
              </label>
              <label htmlFor="nature" className="checkbox-label">
                <input id="nature" type="checkbox" placeholder="nature" />
                Nature
              </label>
            </fieldset>
            <fieldset className="region-fieldset">
              <legend>Par région:</legend>
              <label htmlFor="culture" className="checkbox-label">
                <input id="paris" type="checkbox" placeholder="paris" />
                Paris
              </label>
              <label htmlFor="auvergne" className="checkbox-label">
                <input id="auvergne" type="checkbox" placeholder="auvergne" />
                Auvergne
              </label>
              <label htmlFor="bretagne" className="checkbox-label">
                <input id="bretagne" type="checkbox" placeholder="bretagne" />
                Bretagne
              </label>
            </fieldset>
          </form>
        </form>

      </section>
      <section className="aside__links">

        <h2 className="aside__title">Mon compte</h2>
        <nav className="aside__nav">
          <a href="/account">
            <li className="asside__link">Utilisateur</li>
          </a>
          <a href="/lists">
            <li className="asside__link">Mes listes</li>
          </a>
          <a href="/logout">
            <li className="asside__link">Se déconnecter</li>
          </a>
        </nav>
      </section>

    </aside>
  );
}

export default Aside;
