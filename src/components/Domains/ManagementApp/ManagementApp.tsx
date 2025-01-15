// components
import ManagementSidebar from './components/ManagementSidebar/ManagementSidebar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';

//styles
import styles from './ManagementApp.module.css';

export default function ManagementApp() {
  return (
    <div className={styles.managementApp}>
      <ManagementSidebar />
      <NoProjectSelected />
      {/* <NewProject /> */}
    </div>
  );
}
