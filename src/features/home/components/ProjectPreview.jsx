/* Stylized "screenshot" mockups rendered as inline SVG.
   Colors resolve from the theme, so previews adapt to dark/light mode. */

function Chrome() {
  return (
    <>
      <rect width="640" height="360" fill="var(--color-muted)" />
      <rect width="640" height="36" fill="var(--color-card)" />
      <circle cx="20" cy="18" r="4.5" fill="var(--color-border)" />
      <circle cx="38" cy="18" r="4.5" fill="var(--color-border)" />
      <circle cx="56" cy="18" r="4.5" fill="var(--color-border)" />
    </>
  );
}

function Store() {
  const cols = [24, 232, 440];
  const rows = [88, 216];
  return (
    <>
      <Chrome />
      <rect x="24" y="56" width="140" height="12" rx="6" fill="var(--color-border)" />
      <circle cx="616" cy="62" r="8" fill="var(--color-amber)" />
      {rows.map((y) =>
        cols.map((x, i) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="176" height="112" rx="10" fill="var(--color-card)" />
            <rect x={x + 12} y={y + 12} width="152" height="52" rx="6" fill="var(--color-muted)" />
            <rect x={x + 12} y={y + 76} width="100" height="8" rx="4" fill="var(--color-border)" />
            <rect x={x + 12} y={y + 92} width="64" height="8" rx="4" fill="var(--color-border)" opacity="0.7" />
            {i === 0 && y === 88 ? (
              <rect x={x + 120} y={y + 72} width="44" height="16" rx="8" fill="var(--color-amber)" opacity="0.85" />
            ) : null}
          </g>
        ))
      )}
    </>
  );
}

function Dashboard() {
  const bars = [
    { x: 196, h: 64 },
    { x: 252, h: 96 },
    { x: 308, h: 52 },
    { x: 364, h: 128 },
    { x: 420, h: 88 },
    { x: 476, h: 148 },
    { x: 532, h: 104 },
  ];
  return (
    <>
      <Chrome />
      <rect x="24" y="56" width="112" height="280" rx="10" fill="var(--color-card)" />
      <rect x="40" y="76" width="80" height="8" rx="4" fill="var(--color-amber)" opacity="0.85" />
      <rect x="40" y="100" width="80" height="8" rx="4" fill="var(--color-border)" />
      <rect x="40" y="124" width="80" height="8" rx="4" fill="var(--color-border)" />
      <rect x="40" y="148" width="80" height="8" rx="4" fill="var(--color-border)" />
      {[160, 312, 464].map((x) => (
        <g key={x}>
          <rect x={x} y="56" width="152" height="64" rx="10" fill="var(--color-card)" />
          <rect x={x + 16} y="72" width="56" height="8" rx="4" fill="var(--color-border)" />
          <rect x={x + 16} y="92" width="88" height="10" rx="5" fill="var(--color-foreground)" opacity="0.45" />
        </g>
      ))}
      <rect x="160" y="136" width="456" height="200" rx="10" fill="var(--color-card)" />
      {bars.map((bar, i) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={312 - bar.h}
          width="36"
          height={bar.h}
          rx="6"
          fill={i === 5 ? "var(--color-amber)" : "var(--color-border)"}
          opacity={i === 5 ? 0.9 : 0.8}
        />
      ))}
    </>
  );
}

function Tasks() {
  const rows = [88, 140, 192, 244, 296];
  return (
    <>
      <Chrome />
      <rect x="24" y="56" width="180" height="14" rx="7" fill="var(--color-border)" />
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="24" y={y} width="408" height="44" rx="10" fill="var(--color-card)" />
          {i < 2 ? (
            <>
              <rect x="38" y={y + 12} width="20" height="20" rx="6" fill="var(--color-amber)" />
              <path
                d={`M43 ${y + 22} l4 4 l7 -8`}
                stroke="var(--color-card)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <rect
              x="38"
              y={y + 12}
              width="20"
              height="20"
              rx="6"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="2"
            />
          )}
          <rect
            x="72"
            y={y + 18}
            width={i % 2 === 0 ? 220 : 170}
            height="9"
            rx="4.5"
            fill="var(--color-border)"
            opacity={i < 2 ? 0.5 : 0.9}
          />
        </g>
      ))}
      <rect x="456" y="88" width="160" height="252" rx="10" fill="var(--color-card)" />
      <rect x="472" y="108" width="88" height="10" rx="5" fill="var(--color-foreground)" opacity="0.45" />
      <rect x="472" y="132" width="128" height="8" rx="4" fill="var(--color-border)" />
      <rect x="472" y="152" width="112" height="8" rx="4" fill="var(--color-border)" />
      <rect x="472" y="172" width="128" height="8" rx="4" fill="var(--color-border)" />
      <rect x="472" y="204" width="64" height="20" rx="10" fill="var(--color-amber)" opacity="0.85" />
    </>
  );
}

function Site() {
  return (
    <>
      <Chrome />
      <rect x="24" y="56" width="592" height="150" rx="10" fill="var(--color-card)" />
      <rect x="48" y="92" width="220" height="16" rx="8" fill="var(--color-foreground)" opacity="0.5" />
      <rect x="48" y="120" width="160" height="10" rx="5" fill="var(--color-border)" />
      <rect x="48" y="150" width="88" height="24" rx="12" fill="var(--color-amber)" opacity="0.9" />
      {[24, 224, 424].map((x) => (
        <g key={x}>
          <rect x={x} y="222" width="192" height="114" rx="10" fill="var(--color-card)" />
          <circle cx={x + 32} cy="254" r="14" fill="var(--color-muted)" />
          <rect x={x + 58} y="246" width="96" height="9" rx="4.5" fill="var(--color-border)" />
          <rect x={x + 24} y="284" width="144" height="8" rx="4" fill="var(--color-border)" opacity="0.8" />
          <rect x={x + 24} y="302" width="120" height="8" rx="4" fill="var(--color-border)" opacity="0.6" />
        </g>
      ))}
    </>
  );
}

const variants = {
  store: Store,
  dashboard: Dashboard,
  tasks: Tasks,
  site: Site,
};

export default function ProjectPreview({ variant, alt }) {
  const Mock = variants[variant] ?? Store;
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={alt} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <Mock />
    </svg>
  );
}