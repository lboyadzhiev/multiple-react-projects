import { Route, Routes } from 'react-router-dom';

// components
import Accordian from './components/Domains/Accordian/Accordian';
import Navbar from './components/Navigation/Navigation';
import RandomColor from './components/Domains/RandomColor/RandomColor';
import StarRating from './components/Domains/StarRating/StarRating';
import GoalsApp from './components/Domains/GoalsApp/GoalsApp';

// styles
import classes from './App.module.css';
import Input from './components/Shared/Input/Input';

function App() {
  return (
    <section className={classes.appLayout}>
      <aside className={classes.navSidebar}>
        <Navbar />
      </aside>
      <main className={classes.pageContent}>
        <Routes>
          <Route path='/' element={<Accordian />} />
          <Route path='/generate_color' element={<RandomColor />} />
          <Route path='/star_rating' element={<StarRating numOfStars={10} />} />
          <Route
            path='/goals_app'
            element={
              <>
                <Input id='name' label='Your Name' />
                <Input id='age' label='Your Age' />
              </>
            }
          />
        </Routes>
      </main>
    </section>
  );
}

export default App;
