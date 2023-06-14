// STYLES IMPORTS
import { Record } from '../../../@types/data';
import Button from '../../Button';
import './styles.scss';
import placeholder from '../../../assets/images/placeholder.jpg';

// TYPES
// INTERFACE
interface CardState {
  museum: Record;
}

function Card({ museum }: CardState) {
  // Museum Data
  const name = museum.fields.nomoff;
  const location = museum.fields.ville_m;
  const website = museum.fields.url_m;

  return (
    <article className="card">
      <div className="card-image">
        <img src={placeholder} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{name}</h3>
        <p className="card__location">{location}</p>
        <div className="card__tags">
          <span className="card__tag card__tag--visited">Visité</span>
          <span className="card__tag card__tag--list">Dans ma liste</span>
        </div>
        <a href={`https://${website}`}>Site Web</a>
        <Button value="coeur" isSubmit={false} />
      </div>
    </article>
  );
}

export default Card;
