import { Link } from "react-router-dom";

export const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
  target,
  rel,
  id
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-[#A98BE3]/40 whitespace-nowrap active:scale-[0.98]";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#A98BE3] hover:bg-[#9774DC] text-white shadow-md shadow-[#A98BE3]/25 border border-[#CDB7F6] hover:shadow-[#A98BE3]/40",
    secondary: "bg-[#F6F2FF] hover:bg-[#E9D9FF] text-[#1E1B4B] border border-[#E9D9FF] hover:border-[#CDB7F6]",
    outline: "bg-white hover:bg-[#F6F2FF] text-[#1E1B4B] border border-[#CDB7F6] hover:border-[#A98BE3] hover:text-[#7C3AED] shadow-xs",
    purple: "bg-[#E9D9FF] hover:bg-[#CDB7F6] text-[#6D28D9] font-semibold border border-[#CDB7F6]",
    cyan: "bg-[#A98BE3] hover:bg-[#9774DC] text-white font-semibold shadow-md shadow-[#A98BE3]/20",
    ghost: "bg-transparent hover:bg-[#F6F2FF] text-[#64748B] hover:text-[#1E1B4B]"
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        id={id}
        to={to}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
};
