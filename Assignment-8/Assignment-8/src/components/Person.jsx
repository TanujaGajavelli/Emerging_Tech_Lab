import React from 'react'

const Person = ({name,age}) => {
    let msg=`${name} is ${age} years old`    
  return (
    <div>
      <p style={{color:"blue",border:"1px solid black"}}>{msg}</p>
    </div>
  )
}

export default Person
