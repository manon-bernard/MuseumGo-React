// STYLES IMPORTS
import './styles.scss';

// ROUTER IMPORTS
import { Link } from 'react-router-dom';

// COMPONENTS IMPORTS
import placeholder from '../../../assets/images/placeholder.jpg';
import Button from '../../Button';

// TYPES IMPORTS
import { Record } from '../../../@types/data';

// INTERFACE
interface CardState {
  museum: Record;
}

function Card({ museum }: CardState) {
  // Museum Data
  const id = museum.recordid;
  const name = museum.fields.nomoff;
  const location = museum.fields.ville_m;
  const { region } = museum.fields;
  const website = museum.fields.url_m;

  return (
    <article className="card">
      <p className="card__region">{region}</p>
      <p className="card__location">{location}</p>
      <div className="card__image">
        <img
          src={placeholder}
          alt=""
        />
      </div>
      <div className="card__content">
        <Link to={`/museum/${id}`}>
          <h3 className="card__title">{name}</h3>
        </Link>
        <div className="card__actions">
          <a href={`https://${website}`}>Site Web</a>
          <Button
            value="coeur"
            isSubmit={false}
          />
        </div>
      </div>
    </article>
  );
}

export default Card;
