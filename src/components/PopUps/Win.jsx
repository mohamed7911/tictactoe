import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { GameContext } from '../../Context/GameContext';
import { Context } from '../../Context/Context';

const Win = () => {

  const {setScreen,setSquares,winner,setWinner,setWinnerX,setWinnerO,setTies}= React.useContext(GameContext)
  const {hidePopUps} = React.useContext(Context)


  return (
    <div className='win'>
          {winner === null ? null : <p> you win!</p>}
          {winner === null ? <h1>Draw</h1> : <h3>{winner === "x" ? <CloseIcon className='x'/> : <FiberManualRecordOutlinedIcon className='o'/>} takes the round</h3>}
        <div>
            <button onClick={()=>{setScreen("start");hidePopUps();setWinnerX(0);setWinnerO(0);setTies(0);setWinner(null);hidePopUps();setSquares(new Array(9).fill(""))}} className='btn'>Quit</button>
            <button onClick={()=>{hidePopUps();setWinner(null);setSquares(new Array(9).fill(""))}} className='btn btn-yellow'>Next round</button>
        </div>
    </div>
  )
}

export default Win