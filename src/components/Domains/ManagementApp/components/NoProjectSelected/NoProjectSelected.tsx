import noProjectImage from '../../assets/no-projects.png';
import Button from '../shared/Button/Button';

// styles
import styles from './NoProjectSelected.module.css';

export default function NoProjectSelected() {
  return (
    <div className={styles.noProjectSelected}>
      <img src={noProjectImage} alt='An empty tasks list' />
      <h2>No Project Selected</h2>
      <p className={styles.content}>
        Select a project or get started with a new one
      </p>
      <p className={styles.btnContainer}>
        <Button>Select new project</Button>
      </p>
    </div>
  );
}
