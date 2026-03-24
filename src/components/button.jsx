import styles from "./Button.module.css"
function button({children,type,onClick}) {
    return (
        <div>
            <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
        </div>
    )
}

export default button
