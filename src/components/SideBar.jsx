import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <Outlet/>
            <footer className={styles.footer}>
                <p className={styles.copywrite}>&copy; copyright {new Date().getFullYear()} by WorldWise inc.</p>
            </footer>

        </div>
    )
}

export default SideBar
