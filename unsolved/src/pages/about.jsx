import styles from '../styles/about.module.css'


export default function About() {
    return (
        <main className={styles.container}>
            <h1>About Justin</h1>
            <img src="/Justin.jpg" alt="a black and white collage of Justin from the waist up" width="200" height="auto"/>
            <p>I’m a web design student, art educator, and bartender. I am currently learning about React, Single Page Applications and Client-Side Rendering.</p>
         </main>
        )
}