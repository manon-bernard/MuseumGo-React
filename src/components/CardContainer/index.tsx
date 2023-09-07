// STYLES IMPORTS
import './styles.scss';

// IMPORTS
import { useAppSelector } from '../../hooks/redux';

// COMPONENTS IMPORTS
import Card from './Card';
import { Record } from '../../@types/data';

function CardContainer() {
  // Loading and errors
  const loading = useAppSelector((state) => state.museum.loading);
  const error = useAppSelector((state) => state.museum.error);

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

  return (
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
          displayedRecords.map((record) => (
            <Card
              key={record.recordid}
              museum={record}
            />
          ))
        )
      }
    </div>
  );
}

export default CardContainer;
