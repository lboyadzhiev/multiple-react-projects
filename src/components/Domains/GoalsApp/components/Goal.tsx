// styles
import styles from './Goal.module.css';

interface GoalProps {
  title: string;
  description: string;
}

export default function Goal({ title, description }: GoalProps) {
  return (
    <article className={styles.Goal}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
