import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import '@/algo/learn-algorithms/index';
import '@/algo/leet-code/index';
import '@/algo/data-structures/index';
import '@/algo/oop/index';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-[sans-serif]">
      <Header />
      <main className="bg-[#0F131C] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
