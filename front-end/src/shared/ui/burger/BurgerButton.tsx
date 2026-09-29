interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerProps) {
  return (
    <button
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="relative flex h-6 w-8 flex-col justify-between cursor-pointer"
    >
      <span
        className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2.75 rotate-45' : ''}`}
      />
      <span
        className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2.75 -rotate-45' : ''}`}
      />
    </button>
  );
}
