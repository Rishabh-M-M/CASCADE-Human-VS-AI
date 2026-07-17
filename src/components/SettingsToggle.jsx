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
        <div className="absolute right-7 top-1/2 -translate-y-1/2 bg-dark text-white text-xs font-mono px-3 py-2 rounded w-48 z-50 pointer-events-none">
          {text}
        </div>
      )}
    </div>
  )
}

function Toggle({ label, value, onChange, tooltip }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="font-human text-base text-dark">{label}</span>
        <Tooltip text={tooltip} />
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${value ? 'bg-human-blue-300' : 'bg-gray-300'}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${value ? 'left-6' : 'left-1'}`} />
      </button>
    </div>
  )
}

export default function SettingsToggle() {
  const [open, setOpen] = useState(false)
  const { animations, setAnimations, cursors, setCursors } = useSettings()
  const isWide = window.innerWidth >= 1024

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white/90 border border-gray-300 rounded p-4 flex flex-col gap-4 min-w-52 shadow-md">
          <p className="font-human text-lg text-dark border-b border-gray-200 pb-2">settings</p>

          <Toggle
            label="animations"
            value={animations}
            onChange={setAnimations}
            tooltip={TOOLTIPS.animations}
          />

          {isWide && (
            <Toggle
              label="custom cursors"
              value={cursors}
              onChange={setCursors}
              tooltip={TOOLTIPS.cursors}
            />
          )}

          {/* <Toggle label="sound effects" value={sound} onChange={setSound} tooltip={TOOLTIPS.sound} /> */}
        </div>
      )}

      <button
        className="font-human text-sm px-4 py-2 bg-white/80 border border-gray-300 rounded shadow cursor-pointer"
        onClick={() => setOpen(o => !o)}
      >
        {open ? 'close' : 'settings'}
      </button>
    </div>
  )
}