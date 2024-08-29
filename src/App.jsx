import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

export const UserContext = createContext(null)
export const ScrollContext = createContext()

function App() {
  const [currentCardId, setCurrentCardId] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  
  return (
    <ScrollContext.Provider value={{scrollY, setScrollY}}>
      <UserContext.Provider value={{currentCardId: currentCardId, setCurrentCardId: setCurrentCardId}}>
        <Header/>
        <Main/>
      </UserContext.Provider>
    </ScrollContext.Provider>
  )
}

export default App
