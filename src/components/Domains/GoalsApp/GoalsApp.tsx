import { useState } from 'react';

// components
import Header from './components/Header';
import GoalsList from './components/GoalsList';

// styles
import classes from './GoalsApp.module.css';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function GoalsApp() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn in in depth',
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <section className={classes.GoalsApp}>
      <Header />
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalsList goals={goals} />
    </section>
  );
}
