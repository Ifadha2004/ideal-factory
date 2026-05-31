import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[var(--primary)]
        px-6
        py-3
        text-sm
        font-medium
        text-white
        transition-all
        duration-300
        hover:opacity-90
        hover:scale-[1.02]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}