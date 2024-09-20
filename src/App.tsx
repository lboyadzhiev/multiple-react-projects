import { Route, Routes } from 'react-router-dom';
import Accordian from './components/Domains/Accordian/Accordian';
import RandomColor from './components/Domains/RandomColor/RandomColor';
import Navbar from './components/Navigation/Navigation';

// styles
import classes from './App.module.css';

function App() {
  return (
    <section className={classes.appLayout}>
      <aside className={classes.navSidebar}>
        <Navbar />
      </aside>
      <main className={classes.pageContent}>
        <Routes>
          <Route path='/' element={<Accordian />} />
          <Route path='/generateColor' element={<RandomColor />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
