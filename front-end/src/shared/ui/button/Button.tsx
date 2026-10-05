import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  size?: 'sm' | 'md';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-indigo-400 text-white hover:bg-indigo-700 transition-colors duration-300',
  secondary:
    'border border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition-colors duration-300',
  danger:
    'bg-red-700 text-white hover:bg-red-800 transition-colors duration-300',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-xs px-2.5 py-1.5',
  md: 'text-sm px-4 py-2',
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
      className={`rounded cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
