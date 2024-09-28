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
            to='/generate_color'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Color Generator
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/star_rating'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Start Rating
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
