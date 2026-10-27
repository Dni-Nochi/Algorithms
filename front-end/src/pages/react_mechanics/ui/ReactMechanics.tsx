import type { NotesProps } from '@/entities/notes/types/types';
import { NotesCard } from '@/entities/notes';
import React, { useState } from 'react';
import { ArticleF1 } from '@/widgets/article-f1';

export function ReactMechanics() {
  const [notesListsChange, setNotesListsChange] = useState<NotesProps[]>([]);
  const [formDate, setFormDate] = useState({ name: '', message: '' });

  console.log(notesListsChange);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormDate((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newNote: NotesProps = {
      id: crypto.randomUUID(),
      name: formDate.name,
      message: formDate.message,
    };

    setNotesListsChange((prevNotes) => [...prevNotes, newNote]);
    console.log('test', formDate);
    setFormDate({ name: '', message: '' });
  }
  return (
    <div className="flex flex-col mx-20">
      <h1>Mechanics pages</h1>
      <div className="flex gap-8 w-full bg-[#f2fffa] rounded-2xl p-4 shadow-xl">
        <ArticleF1 />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[50%] self-end  mt-2.5 gap-2 p-5 bg-[#f2fffa] rounded-2xl"
      >
        <input
          name="name"
          value={formDate.name}
          onChange={handleChange}
          className="border-b border-b-gray-300 transition-colors duration-200 focus:outline-none focus:border-b-gray-700"
          placeholder="Впише ваше имя"
          required
        />
        <textarea
          name="message"
          rows={1}
          value={formDate.message}
          onChange={handleChange}
          className="border-b border-b-gray-300  resize-none overflow-hidden transition-colors duration-200 focus:outline-none focus:border-b-gray-700"
          placeholder="Оставьте комментарий..."
          required
        ></textarea>
        <button className="p-1 cursor-pointer border rounded-2xl" type="submit">
          Отправить
        </button>
      </form>
      <div className="grid grid-cols-3 gap-2 mt-5 border-t border-t-gray-400">
        {notesListsChange.length > 0 ? (
          notesListsChange.map(({ id, name, message }) => {
            return <NotesCard key={id} id={id} name={name} message={message} />;
          })
        ) : (
          <p className="mt-5">Комментариев пока нет</p>
        )}
      </div>
    </div>
  );
}

{
  /* <textarea
  ref={textareaRef}
  rows={1}
  value={text}
  onChange={handleChange}
  placeholder="Оставьте комментарий..."
  className="w-full p-2 resize-none overflow-hidden  border-b border-gray-300 focus:outline-none focus:border-gray-700  transition-colors duration-200"
></textarea>; */
}
