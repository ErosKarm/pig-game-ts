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
      className={`bg-slate-100  px-8 py-3 rounded-full text-slate-800 flex gap-2 ${
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
