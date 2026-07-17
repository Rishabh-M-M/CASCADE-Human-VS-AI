import { createContext, useContext, useState } from 'react'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [animations, setAnimations] = useState(true)
  const [cursors, setCursors] = useState(true)
  // const [sound, setSound] = useState(false)

  return (
    <SettingsContext.Provider value={{
      animations, setAnimations,
      cursors, setCursors,
      // sound, setSound,
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext)
}