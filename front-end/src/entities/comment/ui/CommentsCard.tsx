import type { Comment } from '../model/types';

interface CommentsCardProps extends Comment {
  onFunction: (id: string) => void;
}

export function CommentsCard({
  id,
  author,
  text,
  liked,
  likes,
  onFunction,
}: CommentsCardProps) {
  return (
    <article className="md:p-2">
      <h2>{author}</h2>
      <p>{text}</p>
      <div className="flex gap-2">
        <p>Количество лайков: {likes}</p> -{' '}
        <p>{liked ? 'Поставить лайк' : 'Убрать лайк'}</p>
      </div>
      <button
        onClick={() => onFunction(id)}
        className="p-0.5 rounded-2xl bg-blue-950 border cursor-pointer text-white"
      >
        Удалить
      </button>
    </article>
  );
}
