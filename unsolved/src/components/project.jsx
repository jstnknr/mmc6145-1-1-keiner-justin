import styles from '../styles/home.module.css';

export default function Project({ title, description, image, link }) {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>

      {image && link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className={styles.projectImage} />
        </a>
      )}

      <p>{description}</p>
    </div>
  );
}
