// STYLES IMPORTS
import './styles.scss';

function HeaderNav() {
  return (
    <div className="header__nav">
      <a href="/account" className="header__link">Mon Compte</a>
      <a href="/list" className="header__link">Mes Listes</a>
      <a href="/login" className="header__link">Se connecter</a>
      <a href="/logout" className="header__link">Se déconnecter</a>
    </div>
  );
}

export default HeaderNav;
