// STYLES IMPORTS
import './styles.scss';

// MODULES IMPORTS
import { useEffect } from 'react';

// REDUX IMPORTS
import { useAppDispatch } from '../../hooks/redux';
import { fetchMuseumData } from '../../store/reducers/museum';

// COMPONENTS IMPORTS
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

function App() {
  const dispatch = useAppDispatch();

  // DATA LOADER
  useEffect(() => {
    dispatch(fetchMuseumData());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
