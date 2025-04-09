import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react'
import ProductCard from '../components/ProductCard'
const APICall = () => {
    let url="https://fakestoreapi.com/products"
    const [product,setProduct]=useState([])

    const getProducts=async()=> {
        let data=await axios.get(url)
        setProduct(data.data)
        
    }
    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className='container my-3'>
            <div className='d-flex flex-wrap'>
                {
                    product.map(product=>(
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default APICall
