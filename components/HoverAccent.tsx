export function HoverAccent() {
  return (
    <span
      className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
      style={{ background: "var(--signal)" }}
      aria-hidden="true"
    />
  );
}
