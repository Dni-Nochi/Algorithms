// 1) Возможность написать комментарий и отобразить его
// Этот компонент для отображения карты:
// В нем будет находится имя пользователя(нужно будет вписывать каждый раз, так как нет авторизации)
// просто как ui отмечу иконку аватарки, и снизу сам текст
import type { NotesProps } from '../types/types';
export function NotesCard({ name, message }: NotesProps) {
  return (
    <div className="max-w-100">
      <div className="flex items-center gap-3.5 pb-2">
        <div className="w-10 h-10 rounded-[50%] bg-[#faf2ff]"></div>
        <h4>{name}</h4>
      </div>
      <p>{message}</p>
    </div>
  );
}
