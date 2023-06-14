// STYLES IMPORTS
import './styles.scss';

// LEAFLET IMPORTS
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// COMPONENTS IMPORTS
import { LatLngExpression } from 'leaflet';
import Button from '../Button';

// TYPES IMPORTS
import { Record } from '../../@types/data';

// INTERFACE
interface MuseumDetailsProps {
  museum: Record
}

function MuseumDetails({ museum } : MuseumDetailsProps) {
  // Get Raw Museum Data
  const {
    nomoff: name,
    url_m: website,
    region,
    atout: assets,
    artiste: artists,
    dompal: domains,
    interet: interests,
    hist: history,
    lieu_m: location,
    cp_m: zip,
    ville_m: city,
    an_creat: year,
    categ: category,
    longitude,
    latitude,

  } = museum.fields;

  // Format Data
  const address = `${zip} ${city} `;

  const interestsParagraphs = interests?.split('. ') || [];
  const assetsParagraphs = assets?.split('. ') || [];
  const themesList = domains?.split(';') || [];
  const historyParagraphs = history?.split('. ') || [];
  const artistsList = artists?.split('. ') || [];

  // Page DataType Array
  const items = [
    { content: interestsParagraphs, title: 'Interets' },
    { content: assetsParagraphs, title: 'Atouts majeurs' },
    { content: themesList, title: 'Thèmes principaux' },
    { content: historyParagraphs, title: 'Historique' },
    { content: artistsList, title: 'Artistes principaux' },
  ];

  // Map
  const coordinates = [latitude, longitude] as LatLngExpression;

  return (

    <div className="museum">
      <section className="museum__map">

        <MapContainer
          center={coordinates}
          scrollWheelZoom={false}
          zoom={13}
          id="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              {name.toUpperCase()}
            </Popup>
          </Marker>

        </MapContainer>

      </section>
      <section className="museum__infos">
        <p className="museum__region">{region}</p>
        <p className={`museum__year ${(!year) ? 'hidden' : ''}`}>{year}</p>
        <p className={`museum__year ${(!category) ? 'hidden' : ''}`}>{category}</p>

        <h1 className={`museum__name ${(!name) ? 'hidden' : ''}`}>{name}</h1>
        <p className="museum__address">{location}</p>
        <p className="museum__address">{address}</p>

        {items.map((item) => (
          <div key={item.title} className={`${(item.content.length < 1) ? 'hidden' : ''}`}>
            <h2 className="museum__title">{item.title}</h2>
            {
              item.content.map((paragraph) => (
                <p className="museum__paragraph" key={paragraph}>{`${paragraph}.`}</p>
              ))
            }
          </div>

        ))}

        <div className="museum__tags" />

        <h2 className={`museum__title ${(!website) ? 'hidden' : ''}`}>{`${"Plus d'infos"}`}</h2>
        <a href={`https://${website}`} className="link">Site Web</a>

        <Button value="Ajouter à ma liste" isSubmit={false} />
      </section>
    </div>
  );
}

export default MuseumDetails;
