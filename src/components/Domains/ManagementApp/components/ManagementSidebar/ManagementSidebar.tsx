// styles
import styles from './ManagementSidebar.module.css';

export default function ManagementSidebar() {
  return (
    <aside className={styles.managementSidebar}>
      <h2>Your Projects</h2>
      <div>
        <button>+ Add Project</button>
      </div>
      <ul></ul>
    </aside>
  );
}
