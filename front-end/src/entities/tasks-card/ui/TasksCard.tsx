import type { TasksCardProps } from '../model/types';
import { Button } from '@/shared/ui/button';

export function TasksCard({
  title,
  description,
  taskId,
  solved = false,
  propsFunction,
}: TasksCardProps) {
  return (
    <article className="bg-amber-50 border rounded-xl lg:w-87.5 lg:p-2.5">
      <h3>
        LeetCode id:{taskId} - {title}
      </h3>
      <p>{description}</p>
      <div className="flex flex-wrap justify-between">
        <p className={solved ? 'text-green-700' : ' text-red-700'}>
          {solved ? 'Решено' : 'Не решено'}
        </p>
        <Button onClick={propsFunction}>Переключить статус</Button>
      </div>
    </article>
  );
}
