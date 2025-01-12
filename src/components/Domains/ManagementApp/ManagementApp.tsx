// components
import ManagementSidebar from './components/ManagementSidebar/ManagementSidebar';

//styles
import styles from './ManagementApp.module.css';

export default function ManagementApp() {
  return (
    <div className={styles.managementApp}>
      <ManagementSidebar />
    </div>
  );
}
