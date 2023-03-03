import React from 'react'
import "./Start.css"
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { GameContext } from '../../Context/GameContext';

const Start = () => {

  const{activeUser,setActiveUser,setPlayMode,setScreen,setXNext} = React.useContext(GameContext)

  return (
    <div className='start'>
      <div className="start__header">
      <CloseIcon className='x'/>
      <FiberManualRecordOutlinedIcon className='o'/>
      </div>
      <div className="card shadow-gray">
        <h1 className='text-lg'>pick player 1's mark</h1>
        <div className="start__player">
          <span onClick={()=>{setActiveUser("x");setXNext(false)}} className={activeUser==="x" ? "start__player--active":""}><CloseIcon className={activeUser==="x"?'x':"x2"}/></span>
          <span onClick={()=>{setActiveUser("o");setXNext(true)}} className={activeUser==="o" ? "start__player--active":""}><FiberManualRecordOutlinedIcon className={activeUser==="o"?'o2':"o"}/></span>
        </div>
        <p className='text-light'>remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button onClick={()=>{setScreen("game"); setPlayMode("cpu")}} className='btn btn-yellow'>New game (vs CPU)</button>
        <button onClick={()=>{setScreen("game"); setPlayMode("user")}} className='btn btn-blue'>New game (vs player)</button>
      </div>

    </div>
  )
}

export default Start