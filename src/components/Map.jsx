import { useSearchParams, useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import {useCities} from '../contexts/CitiesContext'

import styles from './Map.module.css'

function Map() {
  const [mapPosition,setMapPosition]=useState([40,0]);
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng =searchParams.get('lng');
    const navigate=useNavigate();
    const {cities}=useCities();

    const flagemojiToPNG = flag => {
      if (!flag) return null;

      var countryCode = Array.from(flag, codeUnit => codeUnit.codePointAt())
        .map(char => String.fromCharCode(char - 127397).toLowerCase())
        .join("");
      return (
        <img
          src={`https://flagcdn.com/24x18/${countryCode}.png`}
          alt="flag"
        />
      );
    };
    return (
      <div
        className={styles.mapContainer}
       
      >
        <MapContainer
          className={styles.map}
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city)=>
          <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
           
            <Popup>
             <span>{flagemojiToPNG(city.emoji)}</span><span>{city.cityName}</span>
            </Popup>
          </Marker>)}
          
        </MapContainer>
      </div>
    );
}

export default Map
