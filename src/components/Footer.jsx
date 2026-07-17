import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'

const TOOLTIPS = {
  animations: 'enables hover effects and page transitions',
  cursors: 'replaces default cursor with custom hand and robot cursors',
}

function Tooltip({ text }) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative flex items-center">
      <button
        className="font-human text-xs w-5 h-5 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        i
      </button>
      {show && (
        <div className="absolute right-7 bottom-full mb-2 bg-dark text-white text-xs font-mono px-3 py-2 rounded w-48 z-50 pointer-events-none">
          {text}
        </div>
      )}
    </div>
  )
}

function Toggle({ label, value, onChange, tooltip }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <span className="font-human text-sm">{label}</span>
        <Tooltip text={tooltip} />
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-9 h-5 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${value ? 'bg-human-blue-300' : 'bg-gray-400'}`}
      >
        <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${value ? 'left-4' : 'left-0.5'}`} />
      </button>
    </div>
  )
}

export default function Footer({ textClass = 'text-dark' }) {
  const { animations, setAnimations, cursors, setCursors } = useSettings()
  const isWide = window.innerWidth >= 1024

  return (
    <footer className={`w-full flex items-center justify-between px-8 py-4 ${textClass}`}>
      <span className="font-human text-sm opacity-50">cascade 2026</span>

      <div className="flex items-center gap-6">
        <Toggle
          label="animations"
          value={animations}
          onChange={setAnimations}
          tooltip={TOOLTIPS.animations}
        />
        {isWide && (
          <Toggle
            label="cursors"
            value={cursors}
            onChange={setCursors}
            tooltip={TOOLTIPS.cursors}
          />
        )}
        {/* <Toggle label="sound" value={sound} onChange={setSound} tooltip={TOOLTIPS.sound} /> */}
      </div>
    </footer>
  )
}