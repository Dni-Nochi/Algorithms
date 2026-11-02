import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import '@/algo/search-algorithms/algo';
import '@/algo/sorting-algorithms/bubble-sort';
import '@/algo/recursion/recursion';
import '@/algo/leet-code/export_tasks';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow bg-[#0a0a0a] text-white">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
