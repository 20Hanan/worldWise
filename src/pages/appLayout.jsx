
import SideBar from "../components/SideBar"
import styles from './appLayout.module.css'
import Map from "../components/Map"
import User from "../components/User"
import { useAuth } from "../contexts/FakeAuthContext"
function appLayout() {
    const { isAuthenticated } = useAuth();
    return (
      <div className={styles.app}>
        <SideBar />
        <Map />
        {isAuthenticated? <User />:""} 
      </div>
    );
}

export default appLayout
