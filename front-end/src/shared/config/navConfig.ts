export interface NavLink {
  path: string;
  label: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { path: '/algorithms', label: 'Алгоритмы', id: 'home' },
  { path: '/solved_tasks', label: 'Решенные задачи', id: 'solved_tasks' },
  {
    path: '/react_mechanics',
    label: 'React эксперименты',
    id: 'react_mechanics',
  },
];
