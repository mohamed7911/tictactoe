import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import "./BoardCards.css"
import { GameContext } from '../../Context/GameContext';



const BoardCards = ({user="nouser", active, index}) => {

  const {handleClick} = React.useContext(GameContext)

  return (
    <div onClick={()=>handleClick(index)} className={`card s ${!active && "shadow-gray board-cards"} ${user==="x" && "no"} ${user==="o" && "no"} ${active && user==="x" && "shadow-blue board-cards"} ${active && user==="o" && "shadow-yellow board-cards"}`}>
        {user==="x" && <CloseIcon className={active ? "active-x" :"x"} size="lg"/>}
        {user==="o" && <FiberManualRecordOutlinedIcon className={active ? "active-o" :"o"}/>}
    </div>
  )
}

export default BoardCards