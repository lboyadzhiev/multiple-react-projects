import { NavLink } from 'react-router-dom';

// styles
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Selector Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/generate_color'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Color Generator
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/star_rating'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Start Rating
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/learn_typescript'
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Learn TypeScript
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
