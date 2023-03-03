import React from 'react'
import Board from './components/Board/Board'
import Start from './components/Start/Start'
import "./App.css"
import PopUps from './components/PopUps/PopUps'
import { GameContext } from './Context/GameContext'


const App = () => {

  const {screen} = React.useContext(GameContext)


  return (
    <div className='app'>
        <div className='container'>
            {screen === "start" &&<Start/>}
            {screen === "game" &&<Board/>}
        </div>
        <PopUps/>
    </div>
  )
}

export default App