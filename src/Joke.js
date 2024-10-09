import React from 'react'

function Joke(props) {
  return (
    <div>
      {props.setup && <h3>setUp:{props.setup}</h3>}
      <p>puchline: {props.punchline}</p>
    </div>
  )
}

export default Joke
