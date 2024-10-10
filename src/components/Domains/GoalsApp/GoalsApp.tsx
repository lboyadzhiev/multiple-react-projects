import { useState } from 'react';

// components
import Header from './components/Header/Header';
import GoalsList from './components/GoalsList/GoalsList';
import NewGaol from './components/NewGoal/NewGoal';
import InfoBox from './components/InfoBox/InfoBox';

// styles
import styles from './GoalsApp.module.css';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function GoalsApp() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <section className={styles.GoalsApp}>
      <Header />
      <NewGaol onAddGoal={handleAddGoal} />
      {goals.length === 0 ? (
        <InfoBox mode='hint' />
      ) : (
        <>
          {goals.length > 4 && <InfoBox mode='warning' />}
          <GoalsList goals={goals} onHandleDeleteGoal={handleDeleteGoal} />
        </>
      )}
    </section>
  );
}
