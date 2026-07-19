import {
  ViolinStamp,
  BasketballStamp,
  PawnStamp,
  DumbbellStamp,
  PlaneStamp,
  DholStamp,
  ChartStamp,
  CameraStamp,
  CursorStamp,
} from './Stamps.jsx'

const stamps = [
  { Icon: ViolinStamp },
  { Icon: BasketballStamp },
  { Icon: ChartStamp },
  { Icon: PlaneStamp },
  { Icon: PawnStamp },
  { Icon: DholStamp },
  { Icon: CameraStamp },
  { Icon: DumbbellStamp },
  { Icon: CursorStamp },
]

function Column({ side }) {
  // Three copies of the set — the marquee keyframe slides by exactly one third.
  const sets = [0, 1, 2]
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-y-0 z-10 hidden w-20 overflow-hidden lg:block ${
        side === 'left' ? 'left-0' : 'right-0'
      }`}
    >
      <div className="marquee-y-track items-center gap-8 px-3 py-4">
        {sets.map((set) => (
          <div key={set} className="flex flex-col items-center gap-8">
            {stamps.map(({ Icon }, i) => (
              <Icon key={i} className="w-14" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StampBorder() {
  return (
    <>
      <Column side="left" />
      <Column side="right" />
    </>
  )
}
