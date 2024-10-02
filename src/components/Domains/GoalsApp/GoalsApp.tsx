import { useState } from 'react';

// components
import Header from './components/Header';
import GoalsList from './components/GoalsList';
import NewGaol from './components/NewGoal';

// styles
import classes from './GoalsApp.module.css';

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
    <section className={classes.GoalsApp}>
      <Header />
      <NewGaol onAddGoal={handleAddGoal} />
      <GoalsList goals={goals} onHandleDeleteGoal={handleDeleteGoal} />
    </section>
  );
}
