import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/shared/config/navConfig';

export function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-8">
        {NAV_LINKS.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
