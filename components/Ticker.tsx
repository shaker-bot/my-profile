/*
  Specialties ticker — a slow marquee strip between the hero and the
  log. Decorative (the same information lives in the hero lede), so
  the whole strip is aria-hidden. CSS-driven; pauses on hover and
  freezes under prefers-reduced-motion.
*/

const FEED = [
  "CLOUD INFRASTRUCTURE",
  "IDENTITY & ACCESS",
  "DEVOPS",
  "FULL-STACK SYSTEMS",
  "PLATFORM TOOLING",
  "COST OPTIMIZATION",
  "CI / CD",
  "SYSTEMS AT SCALE",
];

function FeedRun() {
  return (
    <span className="flex shrink-0 items-center">
      {FEED.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mono text-[0.72rem] font-medium tracking-[0.14em] text-[color:var(--muted)] whitespace-nowrap px-5">
            {item}
          </span>
          <span className="text-[0.6rem] text-[color:var(--accent)]">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="ticker py-3"
      style={{
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="ticker-track">
        <FeedRun />
        <FeedRun />
      </div>
    </div>
  );
}
