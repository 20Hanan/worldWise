import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { flagemojiToPNG } from "../hooks/flagemojiToPng";
const formatDate = date =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}


function CityItem({ city }) {
  const { currentCity ,deleteCity} = useCities();
  const { cityName, emoji, date, id, position } = city;
  
  function handleDeleteCity(e){
  e.preventDefault();
  deleteCity(id);
  
}
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
             <span className={styles.flag}>{flagemojiToPNG(emoji)}</span>
     

        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDeleteCity}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
