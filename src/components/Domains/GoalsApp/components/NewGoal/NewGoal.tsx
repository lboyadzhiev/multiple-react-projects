import { useRef, type FormEvent } from 'react';

// styles
import styles from './NewGoal.module.css';

interface NewGoalProp {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProp) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.NewGoal}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' ref={goalRef} />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
