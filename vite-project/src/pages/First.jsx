// const First=()=>{
//     let name="Ram"
//     let h1=<h1>Hello World!!</h1>
//     console.log(name,h1);
    
//     return(
//         <>
//             <h1>Hello I am {name}</h1>
//         </>
//     )
// }
// export default First

import UserCard from "../components/UserCard";
import React from 'react'

const First = () => {
    let users = [
        { name: "Bimal", age: 20, mobile: 1212121212, email: "bimal@gmail.com"},
        { name: "ram", age: 22, mobile: 33333333, email: "ram@gmail.com"},
        { name: "Shayam", age: 23, mobile: 44444444, email: "shayam@gmail.com"},
        { name: "Arjun", age: 19, mobile: 55555555, email: "arjun@gmail.com"}
    ]
  return (
    <>
      {
        users.map((user,index)=>(
            <UserCard key={index} user={user}/>
        ))
      }
    </>
  )
}

export default First
