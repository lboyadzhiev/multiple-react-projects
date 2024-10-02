// models
import { type CourseGoal } from '../GoalsApp';

// styles
import styles from './Goal.module.css';

interface GoalProps {
  goal: CourseGoal;
  onDelete: (id: number) => void;
}

export default function Goal({ goal, onDelete }: GoalProps) {
  const { title, description, id } = goal;

  return (
    <article className={styles.Goal}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
