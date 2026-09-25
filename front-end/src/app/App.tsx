import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import '@/algo/search-algorithms/algo';
import '@/algo/sorting-algorithms/bubble-sort';
import '@/algo/recursion/recursion';

function App() {
  return (
    <div>
      <Header />
      {/* <header>
        <Link to="/" className="">
          Главная
        </Link>
        <Link to="/algorithms" className="">
          Алго
        </Link>
      </header> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
