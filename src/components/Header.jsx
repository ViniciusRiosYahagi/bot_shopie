import styles from "../../styles/Header.module.scss"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
              <h1>Shopie</h1>
            </Link>
            

            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About/Contact</Link>
                <a 
                href="https://github.com/ViniciusRiosYahagi" 
                target="_blank" 
                rel="noreferrer"
                >
                Github
                </a>
               
            </div>
        </header>
    )
}

