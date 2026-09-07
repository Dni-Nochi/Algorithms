import { Link, Outlet } from 'react-router-dom';
import '@/algo/algo';

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
