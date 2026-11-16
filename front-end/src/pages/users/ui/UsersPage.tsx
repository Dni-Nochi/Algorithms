import { useLoaderData } from 'react-router-dom';
import type { User } from '@/entities/users/model/types';

export function UsersPage() {
  const users = useLoaderData() as User[];

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
