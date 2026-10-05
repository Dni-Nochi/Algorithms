import { useState } from 'react';
import { INITIAL_COMMENTS, type Comment } from '@/entities/comment/model/types';
import { CommentsCard } from '@/entities/comment/ui/CommentsCard';

export function ReactMechanics() {
  const [list, setList] = useState<Comment[]>(INITIAL_COMMENTS);
  function deleteFN(id: string) {
    setList((prev) => prev.filter((comment) => comment.id !== id));
  }

  const handleAddComment = () => {
    setList((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        author: 'Aron',
        text: 'qwerty',
        likes: 12345,
        liked: false,
      },
    ]);
  };

  return (
    <div className="md:mx-16 lg:mx-20">
      <h2>React Mechanics</h2>
      <ul className="flex gap-2">
        {list.map((comment) => (
          <li key={comment.id} className="rounded-2xl bg-amber-200">
            <CommentsCard {...comment} onFunction={deleteFN} />
          </li>
        ))}
      </ul>
      <button className="border cursor-pointer" onClick={handleAddComment}>
        Добавить новый комментарий
      </button>
      {/* <div>
        <h2>Регистрация</h2>

        <form>
          <div>
            <label htmlFor="username">Ваше имя:</label>
            <input
              type="text"
              id="author"
              placeholder="Введите имя"
              value={}
              onChange={}
              required
            />
          </div>

          <div>
            <label htmlFor="text">Комментарий:</label>
            <input
              type="text"
              id="text"
              placeholder="Напишите, что вы думаете..."
              value={}
              onChange={}
              required
            />
          </div>

          <button type="submit">Отправить</button>
        </form>
      </div> */}
    </div>
  );
}
