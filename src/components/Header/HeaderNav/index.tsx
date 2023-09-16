// STYLES IMPORTS
import './styles.scss';

function HeaderNav() {
  return (
    <div className="header__nav">
      <a
        href="/"
        className="button header__link"
      >
        Accueil
      </a>
      {/* <a
        href="/list"
        className="button header__link"
      >
        Liste
      </a> */}
      {/* <a href="/login" className="button header__link">Se connecter</a>
      <a href="/logout" className="button header__link">Se déconnecter</a> */}
    </div>
  );
}

export default HeaderNav;
