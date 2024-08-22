import React from 'react'

const App = (props) => {
  return (

    <div>
          <h1 style={{backgroundColor:"red",color:"white",textAlign:"center"}}>hiii</h1>

      Welcome to {props.name}
   <h2> my nameis {props.fn}   and {props.ln}</h2>
</div>
  )
}

export default App

