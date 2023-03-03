import React from 'react'

const Restart = () => {
  return (
    <div className='restart'>
        <h1>Restart game?</h1>
        <div>
            <button className="btn btn-yellow">yes, restart</button>
            <button className='btn'>No, cancel</button>
        </div>
    </div>
  )
}

export default Restart