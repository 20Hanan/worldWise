import styles from "./appNav.module.css"
import { NavLink } from "react-router-dom"
function AppNav() {
    return (
      <div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="cities">cities</NavLink>
            </li>
            <li>
              <NavLink to="countries">countries</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default AppNav
