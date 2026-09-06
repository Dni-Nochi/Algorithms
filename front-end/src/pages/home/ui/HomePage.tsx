import { SaveTextInput } from '@/features/save-text';

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Эксперименты с Docker
        </h1>
        <SaveTextInput />
      </div>
    </div>
  );
}
