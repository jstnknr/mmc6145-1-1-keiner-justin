import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Things done by Justin Keiner</h1>
      
      <Project
        title="Javascript 'Adoption Website' Group Project"
        description="This project logs visitors name and welcomes them to the different pages. Pages for cats and dogs use an API to generate pictures of the animal."
        image="/projectOne.png"
        link="https://jstnknr.github.io/com6338-10-10-Folse-Gatson-Keiner/index.html"
      />
      <Project
        title="Light Prints"
        description="A lesson on alternative photo printing for secondary students"
        image="/projectTwo.png"
        link="https://docs.google.com/presentation/d/1oGlqP1SELnNyr8MdlxyuQMCCNN_reFRBCgHPd1ArikU/edit?usp=sharing"
      />
    </main>
  )
}