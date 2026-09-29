export interface NavLink {
  path: string;
  label: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { path: '/algorithms', label: 'Алгоритмы', id: 'home' },
  { path: '/solved_tasks', label: 'Решенные проблемы', id: 'solved_tasks' },
];
