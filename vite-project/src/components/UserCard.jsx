import React from 'react'

const UserCard = ({user}) => {
    const {name,age,mobile,email}=user
  return (
    <div className='card m-2' style={{width:'100px'}}>
        <div className='card-body'>
            <h1>{name}</h1>
            <label>{age}</label>
            <p>{mobile}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default UserCard
