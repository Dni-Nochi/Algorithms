import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div>
      <Link to="/" className="relative">
        <span
          aria-hidden="true"
          className="absolute -inset-1 blur-xl bg-cyan-900 rounded-full pointer-events-none"
        />
        <span className="relative z-10">ALGO</span>
      </Link>
    </div>
  );
}
