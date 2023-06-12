// STYLES IMPORTS
import './styles.scss';

// MODULES IMPORTS
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS IMPORTS
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

import { Data, Facet, Record } from '../../@types/data';

function App() {
  // STATE
  const [museums, setMuseums] = useState<Record[]>([]);
  const [domains, setDomains] = useState<Facet[]>([]);
  const [regions, setRegions] = useState<Facet[]>([]);
  const [loadingError, setLoadingError] = useState<Error>();

  // DATA LOADER
  useEffect(
    () => {
    // Function that calls the API and set the state with the results.
      const fetchMuseumData = async () => {
        const { data } = await axios({
          url: '/',
          method: 'GET',
          baseURL: 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=musees-de-france-base-museofile&q=&rows=2000&facet=dompal&facet=region&facet=ville_m',
        });

        setMuseums(data.records);
        setDomains(data.facet_groups[0].facets);
        setRegions(data.facet_groups[1].facets);
      };

      fetchMuseumData()
        .catch((error) => {
          setLoadingError(error);
        });
    },

    [],
  );

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
