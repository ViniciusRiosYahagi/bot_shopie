import Layout from "../components/Layout"
import styles from "../../styles/About.module.scss"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <>
            <Layout>
                <div className={styles.about_container}>
                    <h1>About Sophie</h1>
                    <h3>
                    Sophie is a bot that writes random sentences, based on the philosophers names.
                    </h3>
                    <h5>version: 1.0.1</h5>
                    <h1>Contact</h1>
                    <h4>
                    Developed by:  
                    <a 
                    href="https://www.linkedin.com/in/vinicius-yahagi-rios-350647280/" 
                    target="_blank" 
                    rel="noreferrer"
                    >
                     Vinicius Yahagi Rios
                    </a>
                    </h4>
                    <h4>Email: ViniciusYahagiRios@hotmail.com</h4>
                    <h1>Technologies</h1>
                    <h4>
                    <Link to="https://react.dev" target="_blank">React</Link>
                    <Link to="https://sass-lang.com" target="_blank">Sass</Link>
                    </h4>
                </div>
            </Layout>
        </>
    )
}
