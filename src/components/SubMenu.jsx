import styles from "../../styles/SubMenu.module.scss"

export default function SubMenu() {
    return (
        <div className={styles.submenu_container}>
            <nav>
                <a href="">About</a>
                <a href="">Github</a>
                <a href="">Close</a>
            </nav>
        </div>
    )
}