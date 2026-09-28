import { Logo } from '@/shared/ui/logo';

export function Header() {
  return (
    <header className="border-b-2 border-[#c1c1c1] bg-[#fffaf2]">
      <div className="flex justify-between items-center gap-4 h-15 mx-20">
        <Logo />
        <button>|||</button>
      </div>
    </header>
  );
}
