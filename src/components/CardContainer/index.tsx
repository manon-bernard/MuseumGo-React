// STYLES IMPORTS
import './styles.scss';

// IMPORTS
import { useAppSelector } from '../../hooks/redux';

// COMPONENTS IMPORTS
import Card from './Card';
import { Record } from '../../@types/data';
import Pagination from './Pagination';

function CardContainer() {
  // Loading and errors
  const loading = useAppSelector((state) => state.museum.loading);
  const error = useAppSelector((state) => state.museum.error);
  const loadedResults = useAppSelector((state) => state.museum.loadedResults);

  // Full list
  const records = useAppSelector((state) => state.museum.records);
  let displayedRecords: Record[] = [];

  // Filtering & Searching
  const filters = useAppSelector((state) => state.museum.filtered_regions);

  const searchResults = useAppSelector((state) => state.museum.searched_records);

  if (searchResults.length === 0) {
    if (filters.length === 0) {
      displayedRecords = records;
    } else {
      displayedRecords = records.filter((item) => filters.includes(item.fields.region));
    }
  } else if (filters.length === 0) {
    displayedRecords = searchResults;
  } else {
    displayedRecords = searchResults.filter((item) => filters.includes(item.fields.region));
  }

  const matchingRecords = displayedRecords.slice(0, loadedResults);

  return (
    <div>
      {!loading && (
        <p className="results">
          {displayedRecords.length} musée(s) trouvé(s) ({matchingRecords.length} affiché(s))
        </p>
      )}

      <div className="card-container">
        {
          // Error
          error && <p>Une erreur est survenue...</p>
        }
        {
          // Normal Loading
          loading ? (
            <p>Chargement des musées en cours...</p>
          ) : (
            matchingRecords.map((record) => (
              <Card
                key={record.recordid}
                museum={record}
              />
            ))
          )
        }
      </div>
      <Pagination />
    </div>
  );
}

export default CardContainer;
