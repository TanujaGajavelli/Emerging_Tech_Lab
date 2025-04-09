import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import UserCard from '../components/UserCard'

const API = () => {
    const url="https://dummyjson.com/users"
    const [usersData,setUsersData]=useState([])
    const getUsers=async()=>{
        let data=await axios.get(url)
        setUsersData(data.data.users)
        console.log(data.data.users);
        
        
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
      {
        usersData.map(user=>(
            <UserCard key={user.id} user={user}/>
        ))
      }
    </div>
  )
}

export default API
