import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { useNavigate } from 'react-router-dom'

const endLogo = `${import.meta.env.BASE_URL}assets/end/End_logo.svg`

export default function End() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-screen bg-dark flex flex-col overflow-hidden">

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

        {/* purple glow bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }} />
        </div>

        {/* dimension rift tears */}
        <RiftLeft />
        <RiftRight />

        <motion.div
          className="relative z-10 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-human text-8xl text-white" style={{ textShadow: '0 0 40px rgba(139,92,246,0.8)' }}>
            END
          </h1>
          <p className="font-mono text-light/60 text-lg max-w-md leading-relaxed">
            where the human and the machine overlap
          </p>
        </motion.div>
      </section>

      {/* THE BROADER VIEW */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 max-w-4xl mx-auto w-full relative">
        <RiftTear side="left" />
        <EndSection title="THE BROADER VIEW" font="mixed">
          <p className="font-mono text-light/70 leading-relaxed mb-6">
            Game-playing AI has always been a testing ground. Chess gave us search. Go gave us neural networks.
            Starcraft gave us real-time decision making under uncertainty. Games are useful precisely because
            they're contained fixed rules, clear outcomes, measurable progress.
          </p>
          <p className="font-human text-xl text-light leading-relaxed mb-6">
            The techniques inside Cascade tree search, pruning, evaluation functions aren't just for games.
            They show up in robotics path planning, logistics optimisation, drug discovery, financial modelling.
          </p>
          <p className="font-mono text-light/70 leading-relaxed">
            Every time an agent learns to play a game well, something transfers. The game is the laboratory.
            What gets built there eventually leaves it.
          </p>
        </EndSection>
      </section>

      {/* COMINED EFFORTS */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 max-w-4xl mx-auto w-full relative">
        <RiftTear side="right" />
        <EndSection title="THE REFLECTION" font="human">
          <p className="font-human text-xl text-light leading-relaxed mb-6">
            The project didn't show that AI beat humans at a game. It showed that the two worked best together.
          </p>
          <p className="font-mono text-light/70 leading-relaxed mb-6">
            The human side designed the heuristics, understood the game aesthetically, made judgment calls
            about what mattered. The AI executed with a consistency and search depth no human could match.
            Neither alone would have placed 1st.
          </p>
          <p className="font-human text-xl text-light leading-relaxed">
            That's the more interesting frame not Human vs AI, but what happens when both are pointing
            in the same direction.
          </p>
        </EndSection>

        <div className="mt-16">
          <EndSection title="THE FUTURE" font="mono">
            <p className="font-mono text-light/70 leading-relaxed mb-6">
              The shift that's already happening from AI as opponent to AI as collaborator. Agents that
              don't just play the game but help you understand it. Tools that augment judgment rather than
              replace it.
            </p>
            <p className="font-human text-xl text-light leading-relaxed">
              The question stopped being "can AI beat humans" a while ago. The more interesting one
              is what they build together.
            </p>
          </EndSection>
        </div>
      </section>

      {/* THE END'S END */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-24 relative">
        <RiftLeft small />
        <RiftRight small />

        <div className="relative z-10 flex flex-col items-center gap-10 text-center max-w-lg">
          <div className="w-16 h-px bg-purple-400/50" />

          <p className="font-human text-3xl text-white leading-relaxed"
            style={{ textShadow: '0 0 20px rgba(139,92,246,0.6)' }}>
            THE END'S END
          </p>

          <p className="font-mono text-light/60 leading-relaxed">
            When the game ends, the board resets. The thinking that went into it doesn't.
          </p>

          <p className="font-human text-lg text-light/80 leading-relaxed">
            Thanks for reading. If you want to talk about the project, AI, or anything else
            reach out.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://linkedin.com/in/rishabh-mm" target="_blank" rel="noreferrer"
              className="font-mono text-sm px-6 py-3 border border-purple-400 text-purple-300 rounded cursor-pointer hover:bg-purple-400/10 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Rishabh-M-M" target="_blank" rel="noreferrer"
              className="font-mono text-sm px-6 py-3 border border-purple-400 text-purple-300 rounded cursor-pointer hover:bg-purple-400/10 transition-colors">
              GitHub
            </a>
          </div>

          <button
            onClick={() => navigate('/')}
            className="font-human text-xl px-8 py-4 mt-4 text-white border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
            style={{ textShadow: '0 0 20px rgba(139,92,246,0.6)' }}
          >
            back to the start
          </button>

          <div className="w-16 h-px bg-purple-400/50" />
        </div>
      </section>

      <Footer textClass="text-light" />
    </div>
  )
}

function EndSection({ title, children }) {
  return (
    <div className="relative z-10 border border-purple-500/30 rounded-sm px-8 py-8"
      style={{ background: 'rgba(139,92,246,0.05)', boxShadow: '0 0 40px rgba(139,92,246,0.1)' }}>
      <h2 className="font-mono text-purple-400 tracking-widest text-sm mb-8"
        style={{ textShadow: '0 0 10px rgba(139,92,246,0.6)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function makeRiftPoints(h) {
  const points = []
  let y = 0
  while (y < h) {
    const spike = Math.random() > 0.8
    points.push({ x: spike ? 5 + Math.random() * 15 : 15 + Math.random() * 55, y })
    y += spike ? 5 + Math.random() * 10 : 12 + Math.random() * 35
  }
  return points
}

function RiftLeft({ small = false }) {
  const H = typeof window !== 'undefined' ? window.innerHeight : 800
  const h = small ? H * 0.5 : H
  const points = makeRiftPoints(h)
  const edgeD = `M ${points[0].x} 0 ${points.map(p => `L ${p.x} ${p.y}`).join(' ')}`
  const fillD = `M 0 0 ${points.map(p => `L ${p.x} ${p.y}`).join(' ')} L 0 ${h} Z`

  return (
    <svg className="absolute left-0 top-0 pointer-events-none z-0" width="100" height={h}
      viewBox={`0 0 100 ${h}`} preserveAspectRatio="none">
      <defs>
        <filter id="rift-glow-l">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="rift-fill-l" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0)" />
        </linearGradient>
      </defs>
      {/* fill */}
      <path d={fillD} fill="url(#rift-fill-l)" />
      {/* outer glow */}
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      {/* mid glow */}
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#rift-glow-l)" />
      {/* core */}
      <path d={edgeD} fill="none" stroke="rgba(200,170,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* white hot center */}
      <path d={edgeD} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RiftRight({ small = false }) {
  const H = typeof window !== 'undefined' ? window.innerHeight : 800
  const h = small ? H * 0.5 : H
  const points = makeRiftPoints(h)
  const W = 100
  const edgeD = `M ${W - points[0].x} 0 ${points.map(p => `L ${W - p.x} ${p.y}`).join(' ')}`
  const fillD = `M ${W} 0 ${points.map(p => `L ${W - p.x} ${p.y}`).join(' ')} L ${W} ${h} Z`

  return (
    <svg className="absolute right-0 top-0 pointer-events-none z-0" width="100" height={h}
      viewBox={`0 0 ${W} ${h}`} preserveAspectRatio="none">
      <defs>
        <filter id="rift-glow-r">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="rift-fill-r" x1="1" x2="0" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0)" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#rift-fill-r)" />
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#rift-glow-r)" />
      <path d={edgeD} fill="none" stroke="rgba(200,170,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={edgeD} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RiftTear({ side = 'left' }) {
  const H = 400
  const points = makeRiftPoints(H)
  const x = (p) => side === 'left' ? p.x : 60 - p.x
  const edgeD = `M ${x(points[0])} 0 ${points.map(p => `L ${x(p)} ${p.y}`).join(' ')}`

  return (
    <svg
      className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 pointer-events-none z-0`}
      width="60" height={H} viewBox={`0 0 60 ${H}`} preserveAspectRatio="none">
      <defs>
        <filter id={`rift-tear-glow-${side}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d={edgeD} fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter={`url(#rift-tear-glow-${side})`} />
      <path d={edgeD} fill="none" stroke="rgba(200,170,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={edgeD} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}