import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import ScribblyCard from '../../components/ScribblyCard'
import Nav from '../../components/Nav'

const humanLogo = `${import.meta.env.BASE_URL}assets/human/Human_logo.svg`

function PaperSection({ children }) {
  return (
    <ScribblyCard color="#2661E8">
      <div className="bg-white/70 rounded-sm px-8 py-8 shadow-sm">
        {children}
      </div>
    </ScribblyCard>
  )
}

export default function Human() {
  return (
    <div className="min-h-screen w-screen bg-human bg-cover bg-center bg-fixed flex flex-col">

      {/* NAV */}
      <nav className="flex items-center px-8 py-4 gap-4 justify-start">
  <motion.img layoutId="human-logo" src={humanLogo} alt="Human" className="h-10 w-auto object-contain" />
  <ScribblyCard className="px-1 py-1">
    <Nav />
  </ScribblyCard>
</nav>

      {/* HERO — parallax banner placeholder */}
      <div className="w-full h-screen flex items-center justify-center border-2 border-dashed border-human-blue-300/40">
        <span className="font-human text-2xl text-human-blue-300/60">
          hero parallax banner
        </span>
      </div>

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-8 py-24 flex flex-col gap-16">

        {/* THE ABOUT */}
        <PaperSection>
          <h2 className="font-human text-4xl text-human-blue-400 mb-6">THE ABOUT</h2>
          <p className="font-human text-lg text-dark leading-relaxed">
            This is the story of how we built a game-playing AI agent for our Artificial Intelligence
            course at the University of Melbourne, and ended up placing 1st in the class tournament.
            This page covers who we are, how we approached it, and the game at the centre of it all: Cascade.
          </p>
        </PaperSection>

        {/* THE START */}
        <PaperSection>
          <h2 className="font-human text-4xl text-human-blue-400 mb-6">the START</h2>
          <p className="font-human text-lg text-dark leading-relaxed">
            We were paired up for the project in COMP30024: Artificial Intelligence, Semester 1 2025.
            The task was to build an agent that plays Cascade, a board game neither of us had seen before.
            We spent the first week just reading the rules and playing it against each other to understand what good
            play actually looked like. The arguing about strategy came pretty quickly after that.
          </p>
        </PaperSection>

        {/* THE GAME */}
        <PaperSection>
          <h2 className="font-human text-4xl text-human-blue-400 mb-6">the GAME</h2>

          <div className="w-full aspect-square max-w-md mx-auto border-2 border-dashed border-human-blue-300/40 flex items-center justify-center rounded mb-6">
            <span className="font-human text-human-blue-300/60">cascade board image</span>
          </div>

          <p className="font-human text-lg text-dark leading-relaxed mb-4">
            Cascade is an 8×8 board game where pieces stack on top of each other. When a stack gets
            tall enough, it explodes — sending pieces outward and potentially triggering a chain reaction
            across the board. One move can reshape the entire game a few turns later.
          </p>

          <p className="font-human text-lg text-dark leading-relaxed mb-4">
            Simple to pick up. Hard to play well.
          </p>

          <p className="font-human text-sm text-dark/60 italic mb-8">
            Cascade was designed by the COMP30024 teaching staff at the University of Melbourne,
            along with the specs and the playable demo.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
              watch how it's played
            </button>
            <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
              read the game spec
            </button>
            <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
              play it yourself
            </button>
          </div>
        </PaperSection>

        {/* THE TEAM */}
        <PaperSection>
          <h2 className="font-human text-4xl text-human-blue-400 mb-10">the TEAM</h2>

          <div className="flex flex-col gap-6 mb-12">
            <div className="w-48 h-32 border-2 border-dashed border-human-blue-300/40 flex items-center justify-center rounded">
              <span className="font-human text-sm text-human-blue-300/60">mkorje github card</span>
            </div>

            <p className="font-human text-lg text-dark leading-relaxed">
              My teammate brought a lot to this project: sharp instincts for the game, strong technical
              judgment and the kind of reliability that makes a two-person project actually work.
              Their effort was the reason that we won the tournament.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-human text-2xl text-human-blue-400">the ME</h3>

            <div className="w-48 h-48 border-2 border-dashed border-human-blue-300/40 flex items-center justify-center rounded">
              <span className="font-human text-sm text-human-blue-300/60">my photo</span>
            </div>

            <p className="font-human text-lg text-dark leading-relaxed">
              I'm Rishabh Maheshwari, a Computing and Software systems student at the University of Melbourne,
              originally from Mumbai. I really like building creative things and Cheesecake, especially Cheesecake.
            </p>

            <div className="flex gap-4">
              <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
                LinkedIn
              </button>
              <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
                GitHub
              </button>
              <button className="border border-primary font-human text-base px-6 py-2 bg-white/60 cursor-pointer">
                Contact
              </button>
            </div>
          </div>

        </PaperSection>

      </div>

      <Footer textClass="text-dark" />
    </div>
  )
}