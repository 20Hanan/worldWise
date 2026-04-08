import styles from './CityList.module.css'
import Spinner from './Spinner.jsx'
import CityItem from './CityItem.jsx'
import Message from './Message.jsx'
import { useCities } from '../contexts/CitiesContext.jsx';
function CityList() {
    const { isLoading, cities }= useCities();
    if (isLoading) return <Spinner/>
    if(!cities.length)return <Message message="Add Your First City by clicking on a city on the map"/>
    console.log(cities)
    return (
        <ul className={styles.cityList}>
            {cities.map((city)=><CityItem key={city.id} city={city}/>)}
        </ul>
    )
}

export default CityList
