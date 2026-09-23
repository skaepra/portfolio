export default function Badge({ variant = "secondary", className = "", children }) {
  const variants = {
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border text-foreground",
  };

  return (
    <span
      className={`inline-flex h-5 items-center rounded-full px-2 py-2 text-xs font-medium whitespace-nowrap ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}