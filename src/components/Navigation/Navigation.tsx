// styles
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={classes.navigation}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Selector Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/generateColor'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Color Generator
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
