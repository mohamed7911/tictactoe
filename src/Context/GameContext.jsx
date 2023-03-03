import React from 'react'
import { Context } from './Context'

const GameContext =React.createContext() 


const GameState = (props) => {


    const {setMode,showPopUps} = React.useContext(Context)


    const [screen,setScreen] = React.useState("start") //start || game
    const[activeUser,setActiveUser] = React.useState("x") //x || o
    const [playMode,setPlayMode] = React.useState("user") // user ||cpu
    const [squares,setSquares] = React.useState(new Array(9).fill(""))
    const [xNext,setXNext]=React.useState(false)
    const [winner,setWinner] = React.useState(null)
    const [winnerLine,setWinnerLine] = React.useState(null)
    const [winnerX,setWinnerX] = React.useState(0)
    const [winnerO,setWinnerO] = React.useState(0)
    const [ties,setTies] = React.useState(0)
    console.log(xNext);

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]


    const calcWinner = (squares)=>{

      for (let i = 0; i < lines.length; i++) {
        let [a,b,c] = lines[i]
        if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
          return{
            winner: squares[a],
            lines:lines[i]
          }
        }
      }

    }


    const checkWinner = (ns)=>{
      const isWinner = calcWinner(ns)
      if(isWinner){
        setWinner(isWinner.winner)
        setWinnerLine(isWinner.lines)
        setMode("winner")
        showPopUps()
        winner === "x" ? setWinnerO(prev=>prev+1) :  setWinnerX(prev=>prev+1)
      }
    }
    console.log(winner)
    
    const handleClick = (ix)=>{
      const currentUser = xNext ? "o" : "x"
      if(playMode === "cpu" && currentUser!== activeUser ){
        return
      }
      const ns =[...squares]
      ns[ix] = currentUser
      setXNext(!xNext)
      setSquares(ns)
      checkWinner(ns)
      xNext ? setActiveUser("x") : setActiveUser("o")
    }

    React.useEffect(()=>{
      tied()
    },[xNext])

    const tied = () => {
      const moves = squares.filter((e)=>(e === ""))
      if(moves.length===0){
        setTies(prev=>prev+1)
        showPopUps()
      }
    }

  return (
    <GameContext.Provider value={{screen,setScreen,activeUser,setActiveUser,setPlayMode,squares,handleClick,calcWinner,setSquares,xNext,winnerX,winnerO,ties,setXNext,winner,setWinner,setWinnerO,setWinnerX,setTies}}>
        {props.children}    
    </GameContext.Provider>
  )
}

export {GameContext,GameState} 