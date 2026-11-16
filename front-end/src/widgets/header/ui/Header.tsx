import { Logo } from '@/shared/ui/logo';
import { HeaderNav } from '@/widgets/header/ui/HeaderNav';

export function Header() {
  return (
    <header className="h-16 bg-[#0B0F17] text-[#f8f8f9]">
      <div className="flex items-center gap-10 h-full mx-10">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
