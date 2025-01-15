// styles
import Button from '../shared/Button/Button';
import styles from './ManagementSidebar.module.css';

export default function ManagementSidebar() {
  return (
    <aside className={styles.managementSidebar}>
      <h2>Your Projects</h2>
      <p>
        <Button>+ Add Project</Button>
      </p>
      <ul></ul>
    </aside>
  );
}
