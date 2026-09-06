import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { saveTextToServer } from '../../../shared/api/saveText';

export const SaveTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setStatus('loading');
      try {
        await saveTextToServer(inputValue);
        setInputValue('');
        setStatus('success');

        // Возвращаем статус в исходное состояние через 2 секунды
        setTimeout(() => setStatus('idle'), 2000);
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-md">
      <label
        htmlFor="docker-input"
        className="text-sm font-medium text-gray-700"
      >
        Введите текст для файла text.txt:
      </label>
      <input
        id="docker-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={status === 'loading'}
        placeholder="Напишите и нажмите Enter..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      />
      {status === 'success' && (
        <span className="text-green-600 text-sm">Успешно сохранено!</span>
      )}
      {status === 'error' && (
        <span className="text-red-600 text-sm">Произошла ошибка</span>
      )}
    </div>
  );
};
