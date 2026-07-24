/*
  Shared HUD chrome — small decorative primitives used across the
  console. Everything here is presentational and aria-hidden.
*/

/** Four corner brackets for a panel. Parent must be `relative`. */
export function Corners() {
  return (
    <span aria-hidden="true">
      <span className="hud-corner hud-corner--tl" />
      <span className="hud-corner hud-corner--tr" />
      <span className="hud-corner hud-corner--bl" />
      <span className="hud-corner hud-corner--br" />
    </span>
  );
}

/** Registration crosshair (+). */
export function RegMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`reg-mark ${className}`} />;
}

/** Pulsing "system online" dot. */
export function StatusDot({ live = true }: { live?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`status-dot ${live ? "status-dot--live" : ""}`}
    />
  );
}
