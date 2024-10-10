// assets
import goalsImg from '../../assets/goals.jpg';

// styles
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.container}>
      <img src={goalsImg} alt='Goals' />
      <h1>Your Course Goals</h1>
    </header>
  );
}
