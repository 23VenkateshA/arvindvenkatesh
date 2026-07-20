// Rubber-stamp / lino-print SVG library. Every stamp is a vermilion block with
// the artwork "carved out" in the page's charcoal, roughened by the #stamp-rough
// filter defined once in <RoughDefs /> (rendered from App).

const RED = '#c1633d'
const CARVE = '#faf6f0'
const INK = '#2b2420'

export function RoughDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <filter id="stamp-rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.8" />
        </filter>
      </defs>
    </svg>
  )
}

// Square stamp shell: red block + inner carved border, glyph passed as children.
function Stamp({ children, className = '', frame = 'square' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      style={{ filter: 'url(#stamp-rough)' }}
    >
      {frame === 'square' && (
        <>
          <rect x="2" y="2" width="60" height="60" rx="10" fill={RED} />
          <rect x="8" y="8" width="48" height="48" rx="6" fill="none" stroke={CARVE} strokeWidth="2" />
        </>
      )}
      {frame === 'diamond' && (
        <>
          <rect x="9" y="9" width="46" height="46" rx="8" fill={RED} transform="rotate(45 32 32)" />
          <rect
            x="14" y="14" width="36" height="36" rx="5"
            fill="none" stroke={CARVE} strokeWidth="2"
            transform="rotate(45 32 32)"
          />
        </>
      )}
      {frame === 'round' && (
        <>
          <circle cx="32" cy="32" r="30" fill={RED} />
          <circle cx="32" cy="32" r="24" fill="none" stroke={CARVE} strokeWidth="2" />
        </>
      )}
      <g fill="none" stroke={CARVE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  )
}

export function ViolinStamp({ className }) {
  return (
    <Stamp className={className}>
      <circle cx="32" cy="12" r="2" />
      <path d="M32 14 v7" />
      <ellipse cx="32" cy="27" rx="7" ry="6" />
      <ellipse cx="32" cy="38" rx="9.5" ry="8" />
      <path d="M32 21 v25" strokeWidth="1.6" />
      <path d="M26.5 35 q1.5 2.5 0 5" strokeWidth="1.6" />
      <path d="M37.5 35 q-1.5 2.5 0 5" strokeWidth="1.6" />
    </Stamp>
  )
}

export function BasketballStamp({ className }) {
  return (
    <Stamp className={className} frame="round">
      <circle cx="32" cy="32" r="14" />
      <path d="M18 32 h28" strokeWidth="2" />
      <path d="M32 18 v28" strokeWidth="2" />
      <path d="M22.5 22 c4.5 6 4.5 14 0 20" strokeWidth="2" />
      <path d="M41.5 22 c-4.5 6 -4.5 14 0 20" strokeWidth="2" />
    </Stamp>
  )
}

export function PawnStamp({ className }) {
  return (
    <Stamp className={className}>
      <circle cx="32" cy="21" r="5" />
      <path d="M26.5 29.5 h11" />
      <path d="M29 29.5 c0 6 -2 9 -4.5 12.5 h15 c-2.5 -3.5 -4.5 -6.5 -4.5 -12.5" />
      <path d="M22.5 46 h19" />
    </Stamp>
  )
}

export function DumbbellStamp({ className }) {
  return (
    <Stamp className={className}>
      <path d="M23 32 h18" />
      <rect x="15" y="23" width="7" height="18" rx="2" />
      <rect x="42" y="23" width="7" height="18" rx="2" />
    </Stamp>
  )
}

export function PlaneStamp({ className }) {
  return (
    <Stamp className={className} frame="diamond">
      <path d="M16 33 L48 20 L37.5 46 L31 36.5 Z" />
      <path d="M48 20 L31 36.5" strokeWidth="1.8" />
    </Stamp>
  )
}

export function DholStamp({ className }) {
  return (
    <Stamp className={className}>
      <ellipse cx="21" cy="32" rx="4" ry="10.5" />
      <ellipse cx="43" cy="32" rx="4" ry="10.5" />
      <path d="M21 21.5 h22" />
      <path d="M21 42.5 h22" />
      <path d="M24 24 l16.5 16 M40.5 24 l-16.5 16" strokeWidth="1.6" />
    </Stamp>
  )
}

export function ChartStamp({ className }) {
  return (
    <Stamp className={className}>
      <path d="M18 46 h28 M18 46 V18" />
      <rect x="23" y="36" width="5.5" height="10" strokeWidth="2" />
      <rect x="31.5" y="29" width="5.5" height="17" strokeWidth="2" />
      <rect x="40" y="21" width="5.5" height="25" strokeWidth="2" />
    </Stamp>
  )
}

export function CameraStamp({ className }) {
  return (
    <Stamp className={className}>
      <rect x="16" y="25" width="32" height="21" rx="4" />
      <circle cx="32" cy="35.5" r="6.5" />
      <path d="M26 25 v-3.5 h12 V25" strokeWidth="2" />
      <circle cx="43" cy="30" r="1.2" fill={CARVE} />
    </Stamp>
  )
}

export function CursorStamp({ className }) {
  return (
    <Stamp className={className} frame="diamond">
      <path d="M26 17 v24 l5.5 -5.5 l4.5 9 l4 -2 l-4.5 -9 h8 Z" />
    </Stamp>
  )
}

// Tall hero seal — the "lucky cat" equivalent: a violin under an AV monogram.
export function SealStamp({ className }) {
  return (
    <svg
      viewBox="0 0 72 108"
      className={className}
      aria-hidden="true"
      style={{ filter: 'url(#stamp-rough)' }}
    >
      <rect x="3" y="3" width="66" height="102" rx="14" fill={RED} />
      <rect x="9" y="9" width="54" height="90" rx="9" fill="none" stroke={CARVE} strokeWidth="2.2" />
      <text
        x="36" y="34" textAnchor="middle"
        fontFamily="'Instrument Serif', Georgia, serif" fontSize="24" fill={CARVE}
      >
        AV
      </text>
      <g fill="none" stroke={CARVE} strokeWidth="2.4" strokeLinecap="round">
        <circle cx="36" cy="45" r="1.8" />
        <path d="M36 47 v6" />
        <ellipse cx="36" cy="59" rx="7" ry="6" />
        <ellipse cx="36" cy="70" rx="9.5" ry="8" />
        <path d="M36 53 v25" strokeWidth="1.5" />
        <path d="M30.5 67 q1.5 2.5 0 5 M41.5 67 q-1.5 2.5 0 5" strokeWidth="1.5" />
      </g>
      <path
        d="M20 89 q4 -3.5 8 0 t8 0 t8 0 t8 0"
        fill="none" stroke={CARVE} strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  )
}

// Hand-drawn smiley for the nav.
export function Smiley({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="8.5" cy="9" r="1.4" fill="currentColor" />
      <circle cx="15.5" cy="9" r="1.4" fill="currentColor" />
      <path
        d="M7.5 14.5 q4.5 4.5 9 0"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      />
    </svg>
  )
}

// Hand-drawn social icons for the footer.
export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4.5 7.5 L12 13 L19.5 7.5" />
    </svg>
  )
}

export function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5 V16.5" />
      <circle cx="8" cy="7.6" r="0.4" fill="currentColor" />
      <path d="M12 16.5 V10.5 M12 12.8 c0 -1.5 4 -2.3 4 0.4 V16.5" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="0.5" fill="currentColor" />
    </svg>
  )
}

export function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 4 v10.8 a3.4 3.4 0 1 1 -3.4 -3.4" />
      <path d="M13.5 6 c0.8 2.2 2.6 3.6 5 3.8" />
    </svg>
  )
}

// Hand-drawn circle that loops around the Connect nav item, with a little
// overshoot tail. Animate the path's pathLength to "draw" it.
export const CONNECT_CIRCLE_PATH =
  'M14 30 C 8 14, 40 5, 72 6 C 104 7, 126 13, 124 27 C 122 42, 88 49, 52 46 C 24 44, 8 37, 16 22 C 19 16, 28 11, 38 9'

// Deterministic fake QR code for the gallery ticket stub. Rows are 13-bit
// patterns with QR-style finder squares in three corners.
const QR_ROWS = [
  0b1111111010111, 0b1000001001001, 0b1011101010111, 0b1011101000101,
  0b1011101011101, 0b1000001001001, 0b1111111010101, 0b0000000011010,
  0b1010110100110, 0b0110010010011, 0b1111111001010, 0b1000001010110,
  0b1011101011001,
]

export function QRDoodle({ className, color = INK }) {
  return (
    <svg viewBox="0 0 13 13" className={className} aria-hidden="true">
      {QR_ROWS.flatMap((row, y) =>
        Array.from({ length: 13 }, (_, x) =>
          row & (1 << (12 - x)) ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1.05" height="1.05" fill={color} />
          ) : null,
        ),
      )}
    </svg>
  )
}

// Deterministic fake barcode for the scrapbook objects.
const BAR_WIDTHS = [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1]

export function Barcode({ className, color = INK }) {
  let x = 0
  return (
    <svg viewBox="0 0 60 16" className={className} aria-hidden="true" preserveAspectRatio="none">
      {BAR_WIDTHS.map((w, i) => {
        const bar = <rect key={i} x={x} y="0" width={w} height="16" fill={color} />
        x += w + 1.5
        return bar
      })}
    </svg>
  )
}
