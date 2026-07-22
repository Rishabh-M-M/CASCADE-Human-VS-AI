import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'HUMAN', href: '/human' },
  { label: 'AI', href: '/ai' },
  { label: 'END', href: '/end' },
]

export default function Nav({ size = 44 }) {
  const [phase, setPhase] = useState('closed')
  const [merged, setMerged] = useState(0)
  const [hoveredLink, setHoveredLink] = useState(null)
  const timers = useRef([])
  const navigate = useNavigate()
  const location = useLocation()
  const n = LINKS.length
  const step = 240

  const isAI = location.pathname.startsWith('/ai')
  const isEnd = location.pathname.startsWith('/end')

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const open = () => {
    clearTimers()
    setMerged(0)
    setPhase('open')
  }

  const close = () => {
    clearTimers()
    setPhase('closing')
    // merged = how many have combined so far
    // bottom block (index n-1) moves up into (n-2), number increases
    // then that moves into (n-3), etc until all into top block
    // top block then flies up to trigger
    for (let k = 1; k <= n; k++) {
      timers.current.push(setTimeout(() => {
        setMerged(k)
        if (k === n) {
          timers.current.push(setTimeout(() => {
            setPhase('closed')
            setMerged(0)
          }, step + 200))
        }
      }, k * step))
    }
  }

  const toggle = () => phase === 'open' ? close() : phase === 'closed' && open()

  const isOpen = phase === 'open'
  const reforming = phase === 'closing' && merged >= n
  const showBlock = phase === 'closed' || reforming
  const menuVisible = phase === 'open' || (phase === 'closing' && !reforming)

  const blockBg = isAI ? '#DA2324' : '#2661E8'
  const blockBorder = isAI ? '#F87171' : '#61A6FB'
  const menuBorder = isAI ? '#DA2324' : '#2661E8'
  const menuBg = isAI ? '#151515' : 'rgba(255,255,255,0.95)'
  const textColor = isAI ? '#E6E5E4' : '#1F1E1F'
  const fontClass = isAI ? 'font-mono' : 'font-human'
  const boxShadow = isAI ? '0 0 20px #DA2324' : 'none'

  // for each link index, determine its state during closing
  // links render top to bottom: index 0 = HUMAN, 1 = AI, 2 = END
  // combining goes bottom up: END combines into AI, then AI combines into HUMAN
  // merged=1: END gone, AI shows count 2
  // merged=2: AI gone, HUMAN shows count 3
  // merged=3: HUMAN gone (flies up to trigger)
  const getLinkState = (i) => {
    if (phase === 'open') return { visible: true, num: 1, isAccumulator: false }
    if (phase === 'closed') return { visible: false, num: 1, isAccumulator: false }

    const combinedFrom = n - merged 
    const accumulatorIdx = combinedFrom - 1

    if (i >= combinedFrom) return { visible: false, num: 1, isAccumulator: false }
    if (i === accumulatorIdx) return { visible: true, num: merged + 1, isAccumulator: true }
    return { visible: true, num: 1, isAccumulator: false }
  }

  return (
    <div className="fixed top-4 right-4 z-50" style={{ width: 220 }}>

      <button
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={toggle}
        className="nav-btn w-full flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer"
        style={{
          background: menuBg,
          border: `2px solid ${blockBorder}`,
          boxShadow,
        }}
      >
        <span
          className="nav-block flex items-center justify-center rounded-lg font-bold text-white flex-none"
          style={{
            width: size, height: size,
            fontSize: Math.round(size * 0.45),
            background: blockBg,
            border: `2px solid ${blockBorder}`,
            opacity: showBlock ? 1 : 0,
            transform: showBlock ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.6)',
            transition: 'opacity 0.25s ease, transform 0.3s ease',
            animation: reforming ? 'block-reform 0.34s ease-out forwards' : undefined,
          }}
        >
          {n}
        </span>

        <span
          className={`${fontClass} relative flex items-center justify-center flex-1`}
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: textColor, height: 16 }}
        >
          <span className="nav-label-menu absolute">MENU</span>
          <span className="nav-label-cascade absolute opacity-0">CASCADE</span>
          <span className="nav-label-close absolute opacity-0" style={{ color: blockBg }}>CLOSE</span>
        </span>

        <span className="relative flex-none" style={{ width: size * 0.7, height: size * 0.56 }}>
          <span className="bar bar-a absolute left-0 w-full rounded-full" style={{ height: 3, background: textColor }} />
          <span className="bar bar-b absolute left-0 w-full rounded-full" style={{ height: 3, background: textColor }} />
          <span className="bar bar-c absolute left-0 w-full rounded-full" style={{ height: 3, background: textColor }} />
        </span>
      </button>

      {menuVisible && (
        <div
          className="mt-2 flex flex-col gap-1 p-2 rounded-xl shadow-xl overflow-hidden"
          style={{
            width: 220,
            background: menuBg,
            border: `1px solid ${menuBorder}`,
            boxShadow,
          }}
        >
          {LINKS.map(({ label, href }, i) => {
            const { visible, num, isAccumulator } = getLinkState(i)
            const isActive = location.pathname === href
            const isHovered = hoveredLink === i

            return (
              <button
                key={label}
                onClick={() => { close(); setTimeout(() => navigate(href), n * step + 200) }}
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer w-full text-left font-mono`}
                style={{
                  color: isHovered ? '#fff' : isActive ? blockBg : textColor,
                  background: isHovered ? blockBg : 'transparent',
                  border: 'none',
                  opacity: visible ? 1 : 0,
                  maxHeight: visible ? `${size + 16}px` : 0,
                  transform: visible ? 'translateY(0) scale(1)' : `translateY(${-size - 8}px) scale(0.85)`,
                  transition: `opacity 0.2s ease ${i * 0.06}s, transform 0.2s ease ${i * 0.06}s, max-height 0.2s ease ${i * 0.06}s, background 0.15s ease, color 0.15s ease`,
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: isAI ? '0.08em' : undefined,
                  overflow: 'hidden',
                  padding: visible ? undefined : 0,
                }}
              >
                <span
                  className="flex items-center justify-center rounded-lg font-bold text-white flex-none transition-transform duration-150"
                  style={{
                    width: size, height: size,
                    fontSize: Math.round(size * 0.45),
                    background: isHovered ? '#fff' : blockBg,
                    color: isHovered ? blockBg : '#fff',
                    border: `2px solid ${isHovered ? blockBg : blockBorder}`,
                    animation: isAccumulator ? 'num-pop 0.22s ease-out' : undefined,
                    transition: 'background 0.15s ease, color 0.15s ease',
                  }}
                >
                  {num}
                </span>
                {label}
              </button>
            )
          })}
        </div>
      )}

      <style>{`
        .nav-btn:not([aria-expanded="true"]):hover .nav-block {
          animation: block-shake 0.5s ease-in-out infinite !important;
        }
        .nav-btn:not([aria-expanded="true"]):hover .nav-label-menu { opacity: 0; }
        .nav-btn:not([aria-expanded="true"]):hover .nav-label-cascade { opacity: 1; }
        .nav-btn[aria-expanded="true"] .nav-label-menu { opacity: 0; }
        .nav-btn[aria-expanded="true"] .nav-label-close { opacity: 1; }
        .nav-btn[aria-expanded="true"] .bar-a { top: 50%; transform: translateY(-50%) rotate(45deg); }
        .nav-btn[aria-expanded="true"] .bar-b { opacity: 0; }
        .nav-btn[aria-expanded="true"] .bar-c { bottom: auto; top: 50%; transform: translateY(-50%) rotate(-45deg); }
        .bar-a { top: 0; transition: transform 0.3s ease, opacity 0.2s ease; }
        .bar-b { top: 50%; transform: translateY(-50%); transition: opacity 0.2s ease; }
        .bar-c { bottom: 0; transition: transform 0.3s ease; }
        .nav-label-menu, .nav-label-cascade, .nav-label-close {
          transition: opacity 0.18s ease;
          white-space: nowrap;
        }
        @keyframes block-shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20% { transform: translateX(-2px) rotate(-4deg); }
          40% { transform: translateX(2px) rotate(4deg); }
          60% { transform: translateX(-2px) rotate(-3deg); }
          80% { transform: translateX(2px) rotate(3deg); }
        }
        @keyframes block-reform {
          0% { opacity: 0; transform: translateY(28px) scale(0.6); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes num-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}