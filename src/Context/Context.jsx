import React from 'react'

const Context = React.createContext()


const ContextState = (props) => {

    const [show, setShow] = React.useState(false)

    const showPopUps = ()=>setShow(true)
    const hidePopUps = ()=>setShow(false)
    const [mode,setMode] = React.useState("winner")



  return (
    <Context.Provider value={{show,showPopUps,hidePopUps,mode,setMode}}>
        {props.children}
    </Context.Provider>
  )
}

export {Context,ContextState}