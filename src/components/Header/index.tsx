// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import HeaderTitle from './HeaderTitle';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <header className="header">
      <HeaderTitle />
      <HeaderNav />
    </header>
  );
}

export default Header;
