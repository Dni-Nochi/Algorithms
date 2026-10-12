import type { TasksCardProps } from '../model/types';
import { Button } from '@/shared/ui/button';

const levelClasses = {
  Easy: 'text-[#047857] font-medium border-[#047857]',
  Medium: 'text-[#B45309] font-medium border-[#FDE68A]',
  Hard: 'text-[#BE123C] font-medium border-[#FECDD3]',
};

export function TasksCard({
  title,
  description,
  taskId,
  level,
  solved = false,
  onToggleSolved,
}: TasksCardProps) {
  return (
    <article className="w-97.5 p-5 rounded-xl bg-white border border-[#E2E8F0]">
      <div className="flex justify-between pb-2">
        <p className={`px-2 py-0.5 border rounded-lg ${levelClasses[level]}`}>
          {level}
        </p>
        <p className={solved ? 'text-green-700' : ' text-red-700'}>
          {solved ? 'Решено' : 'Не решено'}
        </p>
      </div>
      <h3 className="font-semibold text-2xl">
        LeetCode id:{taskId} - {title}
      </h3>
      <p className="py-3">{description}</p>
      <div className="flex justify-between">
        <Button onClick={onToggleSolved}>Переключить статус</Button>
        <Button variant="algo_link">{solved ? 'Разбор >' : 'Решать'}</Button>
      </div>
    </article>
  );
}
