import { Link } from 'react-router-dom';
export function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link to="/algorithms">Алгоритмы</Link>
        </li>
        <li>
          <Link to="/solved_tasks">Решенные задачи</Link>
        </li>
        <li>
          <Link to="/algorithms">Разрабатывается</Link>
        </li>
        <li>
          <Link to="/algorithms">Разрабатывается</Link>
        </li>
      </ul>
    </nav>
  );
}
