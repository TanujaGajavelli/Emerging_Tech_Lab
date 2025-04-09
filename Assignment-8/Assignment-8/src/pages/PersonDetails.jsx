import React from 'react'
import { useState,useRef } from 'react'
import Person from '../components/Person'
const PersonDetails = () => {
    const name=useRef(null)
    const age=useRef(0)
    const [person,setPerson]=useState(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        let a=name.current.value
        let b=Number(age.current.value)
        if(a==="" || age.current.value===""){
            alert("Please enter name and age");
            return 
        }
        else if(isNaN(b)){
            alert("Please enter valid age")
            return
        }
        setPerson({name:a,age:b})
        name.current.value=""
        age.current.value=""
        
    }
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
            <input type="text"
                ref={name}
                placeholder='Enter your name' />
            <input type="text"
                ref={age}
                placeholder='Enter your age' />
            <button type='submit'>Submit</button>
            {person && <Person name={person.name} age={person.age}/>}
      </form>
    </div>
  )
}

export default PersonDetails
