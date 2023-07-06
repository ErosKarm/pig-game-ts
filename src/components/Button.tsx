type ButtonType = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  className?: string;
  disabled?: boolean;
};

function Button({ children, onClick, icon, className, disabled }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 rounded-full  bg-slate-100 text-slate-800 max-[639px]:px-2 max-[639px]:py-1 max-[639px]:text-[10px] sm:px-3 sm:py-2 sm:text-sm md:px-6 md:py-2 md:text-base lg:px-8 lg:py-3 lg:text-base ${
        className ?? ""
      } z-10 ${disabled ? "bg-slate-300/50" : "bg-slate-100"} `}
      disabled={disabled}
    >
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
}

export default Button;
