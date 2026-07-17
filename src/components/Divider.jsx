import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isHigh } from '../utils/deviceTier'

const PIXEL_COLS = 16
const PIXEL_ROWS = 10
const humanBg = `${import.meta.env.BASE_URL}assets/human/human_bg.jpg`

function TearEffect() {
  const H = window.innerHeight
  const pointsRef = useRef(null)
  if (!pointsRef.current) {
    const points = []
    let y = 0
    while (y < H) {
      points.push({ x: 20 + Math.random() * 44, y })
      y += 15 + Math.random() * 40
    }
    points.push({ x: 32, y: H })
    pointsRef.current = points
  }
  const points = pointsRef.current
  const leftPath = `M 0 0 ${points.map(p => `L ${p.x} ${p.y}`).join(' ')} L 0 ${H} Z`
  const rightPath = `M 64 0 ${points.map(p => `L ${p.x} ${p.y}`).join(' ')} L 64 ${H} Z`

  return (
    <svg width="64" height={H} viewBox={`0 0 64 ${H}`} className="absolute inset-0" preserveAspectRatio="none">
      <defs>
        <clipPath id="tear-left"><path d={leftPath} /></clipPath>
        <clipPath id="tear-right"><path d={rightPath} /></clipPath>
      </defs>
      <image href={humanBg} x="-50vw" y="0" width="100vw" height={H} clipPath="url(#tear-left)" preserveAspectRatio="xMidYMid slice" />
      <path d={rightPath} fill="var(--color-dark)" />
      {points.map((p, i) => i > 0 && (
        <line key={i} x1={points[i-1].x} y1={points[i-1].y} x2={p.x} y2={p.y} stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
      ))}
    </svg>
  )
}

function PixelEffect() {
  const cols = PIXEL_COLS / 4
  const rows = PIXEL_ROWS * 2
  const pixels = Array.from({ length: cols * rows }, (_, i) => i)
  return (
    <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
      {pixels.map((_, i) => (
        <motion.div key={i} className="bg-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.random() > 0.4 ? 1 : 0.3 }}
          transition={{ duration: 0.15, delay: Math.random() * 0.8 }}
        />
      ))}
    </div>
  )
}

function FullPixelFlood() {
  const cols = isHigh ? PIXEL_COLS * 4 : 8
  const rows = isHigh ? PIXEL_ROWS * 2 : 6
  const pixels = Array.from({ length: cols * rows }, (_, i) => i)
  return (
    <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
      {pixels.map((_, i) => (
        <motion.div key={i} className="bg-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: Math.random() * 1.0 }}
        />
      ))}
    </div>
  )
}

function TearSweep() {
  return (
    <motion.div
      className="absolute inset-y-0 left-0 bg-human bg-cover bg-center"
      initial={{ width: '50%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}

export default function Divider({ hover, picked, isNarrow, animations }) {
  return (
    <>
      {isHigh && !isNarrow && animations && (
        <div className="absolute top-0 h-full z-10 pointer-events-none" style={{ left: 'calc(50% - 32px)', width: '64px' }}>
          <AnimatePresence>
            {hover === 'human' && !picked && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                <TearEffect />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hover === 'ai' && !picked && (
              <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <PixelEffect />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {picked === 'ai' && (
          <motion.div className="absolute inset-0 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <FullPixelFlood />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {picked === 'human' && (
          <motion.div className="absolute inset-0 z-20">
            <TearSweep />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}