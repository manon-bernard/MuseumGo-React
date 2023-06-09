// STYLES IMPORTS
import Button from '../../Button';
import './styles.scss';

// COMPONENTS IMPORTS

function Card() {
  return (
    <article className="card">
      <div className="card-image">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title">Musée de la Chaussure</h3>
        <p className="card__location">Romans-sur-Isère</p>
        <div className="card__tags">
          <span className="card__tag card__tag--visited">Visité</span>
          <span className="card__tag card__tag--list">Dans ma liste</span>
        </div>
        <p className="card__details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
        </p>
        <a href="#">Lien du site Web</a>
        <Button value="Coeur" isSubmit={false} />
      </div>
    </article>
  );
}

export default Card;
