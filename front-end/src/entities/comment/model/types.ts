export interface Comment {
  id: string;
  author: string;
  text: string;
  likes: number;
  liked: boolean;
}

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Nor',
    text: 'Отличное видео!',
    likes: 12,
    liked: false,
  },
  {
    id: 'c2',
    author: 'Max',
    text: 'Не понял 3-ю минуту',
    likes: 3,
    liked: false,
  },
  { id: 'c3', author: 'GG', text: 'Спасибо, помогло', likes: 7, liked: true },
];
