import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DetailCard from './components/DetailCard'
import Main from './components/Main'
import {portfolioitems} from './assets/portfolioitems.json'

export const UserContext = createContext(null)
export const ScrollContext = createContext()

function App() {
  //Logic to track scroll position and update header title text
  const [currentCardId, setCurrentCardId] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  
  return (
    <ScrollContext.Provider value={{scrollY, setScrollY}}>
      <UserContext.Provider value={{currentCardId: currentCardId, setCurrentCardId: setCurrentCardId}}>
        <Router>
          <meta name='viewport' content='width=device-width, initial-scale=1 '/>
          <Routes>
            <Route path="/" element={<MainViewLoader portfolioitems={portfolioitems}/>}/>
            <Route path="/project/:id" element={<MainViewLoader portfolioitems={portfolioitems}/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </ScrollContext.Provider>
  )
}

const MainViewLoader = ({portfolioitems}) => {
  const {id} = useParams()
  const item = portfolioitems[id]

  if (!id){
    return( <> <Header/> <Main portfolioitems={portfolioitems}/> </>)
  }

  return item ? (<> <Header id={id} /> <DetailCard item={item} /> </> ): <p> Not found </p>   //TODO: implement 404 
}

export default App
