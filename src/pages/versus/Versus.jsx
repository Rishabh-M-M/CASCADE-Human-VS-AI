import humanLogo from '../../assets/human/Human_logo.svg'
import aiLogo from '../../assets/ai/AI_logo.png'

export default function Versus() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">

      <div className="absolute inset-0 bg-human bg-cover bg-center" />

      <div className="absolute inset-0 grid grid-cols-2">

        <div className="flex flex-col justify-center items-center gap-8">
          <img src={humanLogo} alt="Human" className="h-32 object-contain border-0" />
          <button className="border border-primary font-human text-2xl px-8 py-3 bg-white/60 cursor-pointer">
            pick this side
          </button>
        </div>

        <div className="bg-ai flex flex-col justify-center items-center gap-8">
          <img src={aiLogo} alt="AI" className="h-32 object-contain border-0" />
          <button className="font-mono text-2xl px-8 py-3 cursor-pointer bg-dark text-ai-red-300 border-2 border-ai-red-300 text-shadow-neon">
            pick this side
          </button>
        </div>

      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <span className="font-human text-6xl font-bold text-human-blue-500">V</span>
        <span className="font-mono text-6xl font-bold text-ai-red-100 text-shadow-neon">S</span>
      </div>

    </div>
  )
}