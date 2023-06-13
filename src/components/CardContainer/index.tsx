// STYLES IMPORTS
import './styles.scss';

// IMPORTS
import { useAppSelector } from '../../hooks/redux';

// COMPONENTS IMPORTS
import Card from './Card';

function CardContainer() {
  // STORE DATA
  const records = useAppSelector((state) => state.museum.records);

  return (
    <div className="card-container">
      {
        records.map((record) => (
          <Card key={record.recordid} museum={record} />
        ))
      }

    </div>
  );
}

export default CardContainer;
