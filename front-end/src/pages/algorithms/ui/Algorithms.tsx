import { useState } from 'react';
import { TasksCard } from '@/entities/tasks-card';
import type { TasksCardConfig } from '@/entities/tasks-card/model/types';
import { TASKS } from '@/entities/tasks-card/model/mock';
export function Algorithms() {
  const [tasks, setTasks] = useState<TasksCardConfig[]>(TASKS);
  const solvedCount = tasks.filter((task) => task.solved).length;

  const toggleSolved = (taskId: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.taskId === taskId) {
          return { ...task, solved: !task.solved };
        } else {
          return task;
        }
      }),
    );
  };

  return (
    <div className="lg:mx-20">
      <h2>Front-end</h2>
      <div className="flex gap-2.5 pb-5">
        <p>
          Так как этот сайт(проект) был основан в первую очередь для алгоритмов,
          первые темы будут про них
        </p>
        <p>
          Решено {solvedCount} из {tasks.length}
        </p>
      </div>
      <ul className="flex flex-wrap gap-3">
        {tasks.length === 0 ? (
          <li>Список задач пуст</li>
        ) : (
          tasks.map((task) => (
            <li key={task.taskId}>
              <TasksCard
                title={task.title}
                description={task.description}
                taskId={task.taskId}
                solved={task.solved}
                level={task.level}
                onToggleSolved={() => toggleSolved(task.taskId)}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
