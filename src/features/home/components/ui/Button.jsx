export default function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
  const base =
    "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/85",
    outline: "border border-border bg-background hover:bg-muted",
    ghost: "hover:bg-muted",
    link: "text-brand underline-offset-4 hover:underline px-0",
  };

  const sizes = {
    md: "h-10 px-4",
    lg: "h-12 px-5",
    sm: "h-8 px-3",
  };

  const Comp = props.href ? "a" : "button";

  return (
    <Comp className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}