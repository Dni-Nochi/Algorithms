import type { User } from '../model/types';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Ошибка HTTP ${response.status}`);
    }

    const data: User[] = await response.json();

    return data;
  } catch (error) {
    console.error('Не удалось загрузить пользователей:', error);
    throw error;
  }
}
