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
  { Icon: ViolinStamp, caption: '7 yrs of violin' },
  { Icon: BasketballStamp, caption: 'hoops nerd' },
  { Icon: ChartStamp, caption: 'data kid' },
  { Icon: PlaneStamp, caption: 'collecting places' },
  { Icon: PawnStamp, caption: 'two moves ahead' },
  { Icon: DholStamp, caption: 'dhol season' },
  { Icon: CameraStamp, caption: 'frames on film' },
  { Icon: DumbbellStamp, caption: 'progressive overload' },
  { Icon: CursorStamp, caption: 'digital world' },
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
            {stamps.map(({ Icon, caption }, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon className="w-14" />
                <p className="font-hand mt-1 max-w-[5rem] text-center text-[0.65rem] leading-tight text-tan/70">
                  {caption}
                </p>
              </div>
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
