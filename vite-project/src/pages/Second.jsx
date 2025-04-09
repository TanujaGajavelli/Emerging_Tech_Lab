import { useState } from "react";
import React from 'react'

const Second = () => {
    let [num,setNum]=useState(0)
    let [visible,setVisible]=useState(true)
    function handleClick(){
        setNum(num+1)
        console.log(`Button is clicked ${num} times`);
        
    }
    function toggleVisibility(){
        setVisible(!visible)
    }
  return (
    <>
        <h2>{num}</h2>
        <button onClick={handleClick}>Click</button>
        {
            visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate hic officiis fuga cum harum, nam nesciunt iusto vero commodi incidunt totam officia quo, consequatur sit? Voluptatum, aut sit. Id?</p>
        }
        <button onClick={toggleVisibility}>
            {visible? 'Hide':'Show'}
        </button>
    </>
  )
}

export default Second
