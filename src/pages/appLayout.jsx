
import SideBar from "../components/SideBar"
import styles from './appLayout.module.css'
import Map from "../components/Map"
function appLayout() {
    return (
        <div className={styles.app}>
            <SideBar/>
            <Map/>
            
        </div>
    )
}

export default appLayout
