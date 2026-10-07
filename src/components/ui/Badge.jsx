export const Badge = ({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  icon
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide transition-colors whitespace-nowrap";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm"
  };

  const variantStyles = {
    primary: "bg-[#F6F2FF] text-[#7C3AED] border border-[#E9D9FF]",
    cyan: "bg-[#F6F2FF] text-[#6D28D9] border border-[#CDB7F6]",
    neutral: "bg-white text-[#64748B] border border-[#E9D9FF]",
    purple: "bg-[#E9D9FF] text-[#6D28D9] border border-[#CDB7F6]",
    outline: "bg-transparent text-[#1E1B4B] border border-[#CDB7F6]"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="inline-block shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
