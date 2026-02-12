import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
  const flagemojiToPNG = flag => {
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
function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add Your First City by clkicking on a city on the map" />
    );
 const countries=cities.reduce((acc,cur)=>{
if(!acc.map((el)=>el.country).includes(cur.country))
  return[...acc,{country:cur.country,emoji:flagemojiToPNG(cur.emoji)}];
else
  return acc;
},[])
  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem
          key={country.country}
          country={country}
        />
      ))}
    </ul>
  );
}

export default CountryList;
