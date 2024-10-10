//models
import { type CourseGoal } from '../../GoalsApp';

// components
import Goal from '../Goal/Goal';

//styles
import styles from './GoalsList.module.css';

interface GoalsProps {
  goals: CourseGoal[];
  onHandleDeleteGoal: (id: number) => void;
}

export default function GoalsList({ goals, onHandleDeleteGoal }: GoalsProps) {
  return (
    <ul className={styles.GoalsList}>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal goal={goal} onDelete={onHandleDeleteGoal} />
        </li>
      ))}
    </ul>
  );
}
