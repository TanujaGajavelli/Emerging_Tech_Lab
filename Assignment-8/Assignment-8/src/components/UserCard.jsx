import React from 'react'

const UserCard = ({user}) => {
    
  return (
    <div className='container '>
      <div style={{border:"1px solid black",marginBottom:"15px",padding:"10px"}}>
        <img src={user.image} className="card-img-top" alt={user.firstName}/>
          <div className="card-body">
          <p className="card-text" style={{color:"black"}}>Name:{user.firstName} {user.lastName}</p>
          <p className="card-text" style={{color:"black"}}>Address:{user.address.address}</p>
          <p className="card-text" style={{color:"black"}}>City:{user.address.city}</p>
          <p className="card-text" style={{color:"black"}}>State:{user.address.state}</p>
          <p className="card-text" style={{color:"black"}}>Postal Code:{user.address.postalCode}</p>
          <p className="card-text" style={{color:"black"}}>Mobile:{user.phone}</p>
          <p className="card-text" style={{color:"black"}}>Email:{user.email}</p>
          </div>
        
      </div>
    </div>
  )
}

export default UserCard
