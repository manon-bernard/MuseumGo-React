// STYLES IMPORTS
import './styles.scss';

// IMAGE IMPORT
import placeholder from '../../assets/images/placeholder.jpg';

// COMPONENTS IMPORTS
import Button from '../Button';

// TYPES IMPORTS
import { Record } from '../../@types/data';

// COMPONENTS IMPORTS

// INTERFACE
interface MuseumDetailsProps {
  museum: Record
}

function MuseumDetails({ museum } : MuseumDetailsProps) {
  // Museum Data
  const {
    nomoff: name,
    url_m: website,
    region,
    atout: assets,
    artiste: artists,
    dompal: domains,
    phare: signature,
    interet: interest,
    hist: history,
    lieu_m: location,
  } = museum.fields;

  const address = `${museum.fields.adrl1_m}, ${museum.fields.cp_m} ${museum.fields.ville_m} `;

  return (

    <div className="museum">
      <section className="museum__map">
        <img src={placeholder} alt="" />
        <div className="map" />
        <p className="museum__region">{region}</p>
        <p className="museum__adresse">{location}</p>
        <p className="museum__adresse">{address}</p>
      </section>
      <section className="museum__infos">
        <h1 className="museum__name">{name}</h1>
        <h2 className="museum__title">Themes</h2>
        <div className="museum__themes">{domains}</div>
        <h2 className="museum__title">Atouts</h2>
        <p className="museum__atouts">{assets}</p>
        <h2 className="museum__title">Interets</h2>
        <p className="museum__interests">{interest}</p>
        <h2 className="museum__title">Artiste</h2>
        <p className="museum__interests">{artists}</p>
        <h2 className="museum__title">Histoire</h2>
        <p className="museum__histoire">{history}</p>
        <h2 className="museum__title">Artiste phare</h2>
        <p className="museum__artiste">{signature}</p>
        <div className="museum__tags" />
        <h2 className="museum__title">Lien</h2>
        <a href={`https://${website}`}>Site Web</a>
        <Button value="coeur" isSubmit={false} />
      </section>
    </div>
  );
}

export default MuseumDetails;
