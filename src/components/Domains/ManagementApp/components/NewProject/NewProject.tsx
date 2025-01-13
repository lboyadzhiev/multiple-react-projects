import { type FormEvent } from 'react';

// components
import Input from './components/Input';

// styles
import styles from './NewProject.module.css';

export default function NewProject() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.newProject}>
      <menu>
        <button className={styles.cancelBtn}>Cancel</button>
        <button className={styles.saveBtn}>Save</button>
      </menu>
      <form onSubmit={handleSubmit}>
        <Input label='Title' id='title' type='text' />
        <Input
          label='Description'
          id='description'
          name='description'
          textArea
        />
        <Input label='Due Date' id='dueDate' type='textArea' />
      </form>
    </div>
  );
}
