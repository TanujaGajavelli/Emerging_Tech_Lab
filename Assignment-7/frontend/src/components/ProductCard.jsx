import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    let {_id,itemName,imageName}=product
  return (
    <>

        <div className="card" style={{width: "18rem"}}>
            <img src={imageName} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">{}</p>
                <Link to="#" className="btn btn-primary">More details</Link>
            </div>
        </div> 
    </>
  )
}

export default ProductCard
