import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex gap-4">
      <div>
        <Link to="/">ALGO</Link>
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/algorithms">Текст</Link>
          </li>
          <li>
            <Link to="/algorithms">Текст</Link>
          </li>
          <li>
            <Link to="/algorithms">Текст</Link>
          </li>
          <li>
            <Link to="/algorithms">Текст</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
