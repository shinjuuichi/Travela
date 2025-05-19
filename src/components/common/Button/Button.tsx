import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
        disabled || loading ? 'bg-gray-400 cursor-not-allowed' : ''
      } ${className || ''}`}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
