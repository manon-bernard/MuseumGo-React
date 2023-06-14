// ROUTER IMPORTS
import { Navigate, useParams } from 'react-router';

// REDUX/STORE IMPORTS
import { useAppSelector } from '../../hooks/redux';

// COMPONENTS IMPORTS
import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MuseumDetails from '../../components/MuseumDetails';

// HOME PAGE
export default function Museum() {
  const museumId = useParams().id;

  const museumsList = useAppSelector((state) => state.museum.records);
  const museumRecord = museumsList.find((museum) => (
    museum.recordid === museumId
  ));

  return (

    <Page>
      <Header />
      {(museumRecord === undefined)
        ? <Navigate to="/" />
        : <MuseumDetails museum={museumRecord} />}
      <Footer />
    </Page>
  );
}
