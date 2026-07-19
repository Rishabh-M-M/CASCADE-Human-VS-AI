import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

const aiLogo = `${import.meta.env.BASE_URL}assets/ai/AI_logo.png`

function NeonSection({ children, className = '' }) {
  return (
    <div className={`box-shadow-neon bg-dark/80 border-2 border-ai-red-300 rounded-sm px-8 py-8 ${className}`}>
      {children}
    </div>
  )
}

function ScrollSnap({ children }) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {children}
    </div>
  )
}

function SnapSlide({ children }) {
  return (
    <div className="h-screen snap-start flex flex-col justify-center items-center px-16">
      {children}
    </div>
  )
}

export default function AI() {
  return (
    <div className="min-h-screen w-screen bg-ai flex flex-col">

      {/* NAV */}
      <nav className="flex items-center px-8 py-4 z-10">
        <motion.img layoutId="ai-logo" src={aiLogo} alt="AI" className="h-10 w-auto object-contain" />
      </nav>

      {/* THE CHALLENGE full screen intro */}
      <section className="h-screen flex flex-col justify-center px-16 max-w-4xl mx-auto w-full">
        <NeonSection>
          <h2 className="font-mono text-2xl md:text-3xl text-ai-red-300 heading-shadow-neon tracking-widest mb-6">THE CHALLENGE</h2>
          <p className="font-mono text-light text-xl leading-relaxed mb-4">
            Build an agent that plays an 8×8 board game where pieces stack, explode and
            trigger chain reactions. You have 180 seconds total across the entire game. Every move counts.
          </p>
          <p className="font-mono text-light/60 text-base leading-relaxed">
            The hard part isn't playing the game. It's deciding what to play when there are thousands
            of possible moves and almost no time to think.
          </p>
        </NeonSection>
      </section>

      {/* THE PROJECT tech details */}
      <section className="min-h-screen flex flex-col justify-center px-16 py-24 max-w-4xl mx-auto w-full">
        <NeonSection>
          <h2 className="font-mono text-2xl md:text-3xl text-ai-red-300 heading-shadow-neon tracking-widest mb-6">THE PROJECT</h2>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">the language</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Built in Python. The agent communicates with the game referee over a custom protocol,
                receiving board state and returning moves within strict time limits.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">the search</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Principal Variation Search (PVS) with iterative deepening, searches deeper on each
                iteration, always returning the best move found so far if time runs out.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">the memory</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Transposition table stores previously evaluated positions so the agent never
                calculates the same board state twice.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">the evaluation</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                A multi-factor evaluation function weighing stack height, piece count, centrality,
                mobility, and threat score tuned by playing the agent against itself.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">the shortcuts</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Quiescence search, killer moves, history heuristic, and Late Move Reductions (LMR)
                , each one cuts down the search tree without losing accuracy.
              </p>
            </div>
          </div>
        </NeonSection>
      </section>

      {/* THE INSPIRATION scroll snap slides */}
      <section className="w-full">
        <div className="px-16 max-w-4xl mx-auto py-8">
          <h2 className="font-mono text-2xl md:text-3xl text-ai-red-300 heading-shadow-neon tracking-widest mb-6">THE INSPIRATION</h2>
          <p className="font-mono text-light/40 text-xs">scroll →</p>
        </div>

        <ScrollSnap>
          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">minimax</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                The foundation of almost every game-playing AI. Assume your opponent plays perfectly.
                Maximise your score, minimise theirs. Simple idea but brutally expensive to compute at depth.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">alpha-beta pruning</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Cut branches of the search tree you already know won't matter. If you've found a move
                that's good enough, stop looking at moves that can't beat it. Halves the search space in theory.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">Deep Blue & beyond</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                IBM's Deep Blue beat Kasparov in 1997 using brute-force search with handcrafted evaluation.
                AlphaGo replaced all of that with neural networks. Cascade sits closer to the former
                classical search, human-designed heuristics, no learning.
              </p>
            </NeonSection>
          </SnapSlide>
        </ScrollSnap>
      </section>

      {/* THE EVOLUTION scroll snap slides */}
      <section className="w-full">
        <div className="px-16 max-w-4xl mx-auto py-8">
          <h2 className="font-mono text-2xl md:text-3xl text-ai-red-300 heading-shadow-neon tracking-widest mb-6">THE EVOLUTION</h2>
          <p className="font-mono text-light/40 text-xs">scroll →</p>
        </div>

        <ScrollSnap>
          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">v1: random agent</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Started with a random move selector. Useful as a baseline, anything smarter than
                random is progress. Spoiler: it lost every game.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">v2: greedy search</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Pick the move with the highest immediate score. Faster to implement, better than random,
                but completely blind to what happens next. Easily exploited.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">v3: minimax + alpha-beta</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                First real search. Looked ahead a few moves, pruned the tree. Big jump in strength.
                Hit the time limit too often at depth 4+.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">v4: PVS + iterative deepening</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Switched to Principal Variation Search. Added iterative deepening so the agent always
                has a valid move ready if time runs out. Consistently reaching depth 6-8 in the midgame.
              </p>
            </NeonSection>
          </SnapSlide>

          <SnapSlide>
            <NeonSection className="max-w-2xl w-full">
              <h3 className="font-mono text-xl md:text-2xl text-ai-red-100 heading-shadow-neon mb-4">Final: tuning everything</h3>
              <p className="font-mono text-light/70 leading-relaxed">
                Transposition table, quiescence search, killer moves, LMR, evaluation weights tuned
                by self-play. The agent that entered the tournament. It placed 1st.
              </p>
            </NeonSection>
          </SnapSlide>
        </ScrollSnap>
      </section>

      <Footer textClass="text-light" />
    </div>
  )
}