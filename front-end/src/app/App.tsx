import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import '@/algo/learn-algorithms/index';
import '@/algo/leet-code/export_tasks';
import '@/algo/data-structures/export_data_structures';

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
