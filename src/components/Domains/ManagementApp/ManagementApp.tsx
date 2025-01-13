// components
import ManagementSidebar from './components/ManagementSidebar/ManagementSidebar';
import NewProject from './components/NewProject/NewProject';

//styles
import styles from './ManagementApp.module.css';

export default function ManagementApp() {
  return (
    <div className={styles.managementApp}>
      <ManagementSidebar />
      <NewProject />
    </div>
  );
}
