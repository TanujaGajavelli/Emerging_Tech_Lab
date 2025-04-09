import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../utils/utils'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const [prod,setProds]=useState([])
    const getProducts=async()=>{
        try{
          let data=await axios.get(`${API}/listings`)
          setProds(data.data)
          console.log(prod);
          
        }
        catch(error){
          console.log(error);
          
        }
    }
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <>
     {
      prod.map(product=>(
        <div key={product._id}>
          <ProductCard product={product}/>
        </div>
        
      ))
     }
    </>
  )
}

export default Home
