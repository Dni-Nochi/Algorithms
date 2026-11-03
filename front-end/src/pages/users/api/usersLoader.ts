import { fetchUsers } from '@/entities/users';

export async function usersLoader() {
  return await fetchUsers();
}
