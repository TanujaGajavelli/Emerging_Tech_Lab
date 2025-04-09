import React from 'react'
import { useState } from 'react'
import  './../style/Button.module.css'
const Button = () => {
    const [visible,setVisible]=useState(true)
    function toggleVisibility(){
        setVisible(!visible)
    }
  return (
    <div>
      {
        visible && <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus accusantium libero incidunt eaque deleniti et, similique repudiandae. Eius hic architecto distinctio voluptatum consectetur unde omnis? Repudiandae accusamus soluta explicabo?</p>
      }
      <button onClick={toggleVisibility}>{visible?"Hide":"Display"}</button>
    </div>
  )
}

export default Button
