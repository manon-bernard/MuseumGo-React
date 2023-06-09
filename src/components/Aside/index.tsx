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
