// STYLES IMPORTS
import './styles.scss';

// COMPONENTS IMPORTS
import Card from './Card';

function CardContainer() {
  return (
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardContainer;
