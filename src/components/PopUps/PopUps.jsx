import React from "react";
import {Context} from "../../Context/Context";
import "./PopUps.css";
import Restart from "./Restart";
import Win from "./Win";

const PopUps = () => {
  const {show,mode} = React.useContext(Context);

  return (
    <>
      {show && (
        <div className="pop">
          <div className="pop__content">
            {mode ==="winner" && <Win/> }
            {mode ==="restart" && <Restart/> }
          </div>
        </div>
      )}
    </>
  );
};

export default PopUps;
