import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'algo_link' | 'danger';
  onClick?: () => void;
  size?: 'sm' | 'md';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#4F46E5] text-white hover:bg-indigo-800 transition-colors duration-300',
  algo_link:
    'text-[#4F46E5] text-[16px] hover:text-[#605E81] transition-colors duration-300',
  danger:
    'bg-red-700 text-white hover:bg-red-800 transition-colors duration-300',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-xs px-2.5 py-1.5',
  md: 'text-sm px-3 py-1.5',
};

export function Button({
  variant = 'primary',
  onClick,
  children,
  size = 'md',
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-lg cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
