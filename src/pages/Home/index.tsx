// REACT IMPORTS
import { useEffect } from 'react';

// REDUX/STORE IMPORTS
import { fetchMuseumData } from '../../store/reducers/museum';
import { useAppDispatch } from '../../hooks/redux';

// COMPONENTS IMPORTS
import Page from '../../components/Page';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

// HOME PAGE
export default function Home() {
  const dispatch = useAppDispatch();

  // DATA LOADER
  useEffect(() => {
    dispatch(fetchMuseumData());
  }, [dispatch]);

  return (
    <Page>
      <Header />
      <Main />
      <Footer />
    </Page>
  );
}
