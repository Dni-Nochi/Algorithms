import { Link, Outlet } from 'react-router-dom';
import '@/algo/search-algorithms/algo';
import '@/algo/sorting-algorithms/bubble-sort';
import '@/algo/recursion/recursion';
import '@/algo/leat-code/export_tasks';

function App() {
  return (
    <div>
      <header>
        <Link to="/" className="">
          Главная
        </Link>
        <Link to="/algorithms" className="">
          Алго
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
