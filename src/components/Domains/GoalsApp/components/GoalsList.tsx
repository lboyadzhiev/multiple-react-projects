//models
import { type CourseGoal } from '../GoalsApp';

// components
import Goal from './Goal';

//styles
import styles from './GoalsList.module.css';

interface GoalsProps {
  goals: CourseGoal[];
}

export default function GoalsList({ goals }: GoalsProps) {
  return (
    <ul className={styles.GoalsList}>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title} description={goal.description} />
        </li>
      ))}
    </ul>
  );
}
