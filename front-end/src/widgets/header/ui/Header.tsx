import { useState } from 'react';
import { Logo } from '@/shared/ui/logo';
import { HeaderNav } from '@/widgets/header/ui/HeaderNav';
import { BurgerButton } from '@/shared/ui/burger';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleBurgerButton(): void {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="border-b-2 border-[#c1c1c1] bg-[#fffaf2]">
      <div className="flex items-center lg:h-15 lg:mx-20 lg:justify-start lg:gap-10">
        <Logo />
        <HeaderNav />
        <BurgerButton isOpen={isOpen} onClick={toggleBurgerButton} />
      </div>
    </header>
  );
}
