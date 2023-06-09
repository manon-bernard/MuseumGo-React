// STYLES IMPORTS
import './styles.scss';

function HeaderNav() {
  return (
    <div className="header__nav">
      <a href="/account" className="button header__link">Mon Compte</a>
      <a href="/list" className="button header__link">Mes Listes</a>
      <a href="/login" className="button header__link">Se connecter</a>
      <a href="/logout" className="button header__link">Se déconnecter</a>
    </div>
  );
}

export default HeaderNav;
