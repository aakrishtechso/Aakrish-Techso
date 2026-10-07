export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  id
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div id={id} className={`max-w-3xl ${alignment} ${className}`}>
      {badge && (
        <div
          className={`mb-2.5 inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#7C3AED] ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1B4B] leading-[1.12] font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

