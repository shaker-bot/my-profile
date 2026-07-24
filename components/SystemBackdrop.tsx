/*
  Fixed console backdrop: blueprint grid, concentric range rings,
  a slow radar sweep out of the top-right corner, a faint horizon
  glow, and film grain. Pure CSS — no scripts, no requests.
*/
export default function SystemBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-rings" />
      <div className="bg-radar" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-horizon" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
