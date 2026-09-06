export const saveTextToServer = async (text: string): Promise<void> => {
  const response = await fetch('http://localhost:3001/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Ошибка при сохранении текста');
  }
};
