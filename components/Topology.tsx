/*
  SYS.MAP — a small schematic of the systems this career is built on:
  user → gateway → services → data, with the identity plane (IAM)
  sitting above the request path. Edges draw themselves in on load
  (pathLength="1" + CSS), then packets march along the auth path.
  Decorative; CSS animations only, frozen under reduced motion.
*/

const EDGES = [
  { d: "M36 115 H86", delay: 0.1 },   // USR → GW
  { d: "M95 106 V55 H160", delay: 0.35 }, // GW ↑ IAM
  { d: "M104 115 H160", delay: 0.55 },  // GW → SVC
  { d: "M170 64 V106", delay: 0.75 },   // IAM ↓ SVC
  { d: "M180 115 H246", delay: 0.9 },   // SVC → DB
  { d: "M170 124 V166", delay: 1.05 },  // SVC ↓ QUE
  { d: "M180 175 H255 V126", delay: 1.2 }, // QUE → DB
];

/* The live authentication path — gets marching packets. */
const HOT_EDGES = ["M36 115 H86", "M95 106 V55 H160", "M170 64 V106"];

const NODES = [
  { x: 28, y: 115, label: "USR", labelY: 133 },
  { x: 95, y: 115, label: "GW", labelY: 133 },
  { x: 170, y: 55, label: "IAM", labelY: 40, hot: true },
  { x: 170, y: 115, label: "SVC", labelY: 133 },
  { x: 255, y: 115, label: "DB", labelY: 133 },
  { x: 170, y: 175, label: "QUE", labelY: 193 },
];

export default function Topology() {
  return (
    <svg
      viewBox="0 0 290 210"
      role="img"
      aria-label="Schematic diagram: user traffic flows through a gateway into services and data stores, with an identity and access layer above the request path"
      className="w-full h-auto"
    >
      {/* Base edges, drawing in */}
      {EDGES.map((edge) => (
        <path
          key={edge.d}
          d={edge.d}
          pathLength={1}
          className="topo-draw"
          style={{ animationDelay: `${edge.delay}s` }}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}

      {/* Marching packets on the auth path */}
      {HOT_EDGES.map((d) => (
        <path
          key={d}
          d={d}
          className="topo-flow"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.25"
          opacity="0.8"
          style={{ animationDelay: "1.6s" }}
        />
      ))}

      {/* Nodes — diamonds, matching the timeline rail */}
      {NODES.map((node) => (
        <g key={node.label}>
          {node.hot && (
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="var(--accent)"
              opacity="0.25"
              className="topo-node-pulse"
            />
          )}
          <rect
            x={node.x - 4}
            y={node.y - 4}
            width="8"
            height="8"
            transform={`rotate(45 ${node.x} ${node.y})`}
            fill={node.hot ? "var(--accent)" : "var(--background)"}
            stroke={node.hot ? "var(--accent)" : "var(--muted-2)"}
            strokeWidth="1"
          />
          <text
            x={node.x}
            y={node.labelY}
            textAnchor="middle"
            fill={node.hot ? "var(--accent)" : "var(--muted)"}
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: "8px",
              letterSpacing: "0.12em",
            }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
