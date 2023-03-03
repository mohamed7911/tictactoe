import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import "./Board.css"
import BoardCards from '../BoardCards/BoardCards';
import { GameContext } from '../../Context/GameContext';


const Board = () => {
  const {squares,calcWinner,winnerX,winnerO,ties,activeUser} = React.useContext(GameContext)
  console.log(calcWinner.winner)


  return (
    <div className='board'>
      <div className="board__header">
        <div className="left">
          <CloseIcon className='x'/>
          <FiberManualRecordOutlinedIcon className='o'/>
        </div>
        <div className="mid">
          {activeUser!=="x" ? <FiberManualRecordOutlinedIcon/> : <CloseIcon/>} turn
        </div>
        <div className="right">
          <button className='btn'><ReplayIcon className='replay'/></button>
        </div>
      </div>
      <div onClick={calcWinner} className="board__body">
          {squares.map((e,ix)=>(
            <BoardCards key={ix} user={e} active={ix===4} index={ix}/>
          ))}
      </div>
      <div className="board__footer">
            <div className="card bg-blue">
              <p>X (you)</p>
              <strong>{winnerX}</strong>
              </div>
            <div className="card bg-gray">
              <p>Ties</p>
              <strong>{ties}</strong>
            </div>
            <div className="card bg-yellow">
              <p>o (cpu)</p>
              <strong>{winnerO}</strong>
            </div>
      </div>
    </div>
  )
}

export default Board