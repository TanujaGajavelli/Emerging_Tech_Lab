import axios from 'axios'
import {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'

const ApiCallTwo = () => {
    let url = "https://fakestoreapi.com/products/"
    const [ id, setId ] = useState(1)
    const [ product, setProduct ] = useState({})

    async function getProduct(){
        url += id
        let data = await axios.get(url)
        setProduct(data.data)
        
    }
    function changeId(){
        if(id >= 20){
            setId(1)
        } else {
            setId(id+1)
        }
    }
    useEffect(()=>{
        getProduct()
    }, [id])
  return (
    <div>
        <ProductCard product={product} />
        <button onClick={changeId}>Next {id}</button>
    </div>
  )
}

export default ApiCallTwo