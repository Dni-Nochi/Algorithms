import { Link } from 'react-router-dom';

export function FirstMainSection() {
  return (
    <div className="flex items-center justify-between mt-12">
      <article className="flex flex-col gap-2 w-147 mb-3">
        <h1 className="text-5xl font-bold">
          Интерактивная <br /> архитектура <br />
          <span className="bg-linear-to-r from-sky-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
            алгоритмов и структур
          </span>
        </h1>
        <p className="max-w-135 text-[#C7C4D7]">
          Изучайте дискретные вычисления, оценивайте асимптотическую сложность
          Big O в реальном времени и исследуйте пошаговый трейсинг кода на
          чистом TypeScript.
        </p>

        <Link
          to={'solved_tasks'}
          className="inline-block w-73 px-6 py-2 text-[18px] text-center font-semibold rounded-md bg-[#C0C1FF] text-[#1000A9] hover:bg-[#A6A8FF] hover:text-[#080054] transition-colors duration-300"
        >
          Каталог задач
        </Link>
      </article>

      <div className="w-150 h-98 mr-30 rounded-lg bg-[#181C24]">
        <div className="flex items-center gap-2 m-4  border-b border-[#464554]/40">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-xl bg-[#FFB4AB]"></span>
            <span className="w-3 h-3 rounded-xl bg-[#00A6E0]"></span>
            <span className="w-3 h-3 rounded-xl bg-[#7BD0FF]"></span>
          </div>
          <p className="pl-2 text-[#908FA0]">website-goals.ts</p>
        </div>
        <div className="w-[90%] h-[80%] mx-auto p-2 rounded-xs bg-[#0A0E16]">
          <span>{'// 1) Git'}</span> <br />
          <span>{'// 2) Git'}</span> <br />
          <span>{'// 3) Git'}</span> <br />
          <span>{'// 4) Git'}</span> <br />
        </div>
      </div>
    </div>
  );
}
