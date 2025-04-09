import React, { useState } from 'react'

const ThemeSwitch = () => {
    const [light,setLight]=useState(true)
    function toggleTheme(){
      setLight(!light)
    }
  return (
    <div style={{
      backgroundColor:light?'white':'black',
      color:light?'black':'white'
    }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam corporis mollitia laudantium, ea voluptatibus quidem quam qui odit deleniti earum corrupti nesciunt ipsum commodi beatae incidunt veritatis dicta modi?</p>
      <button onClick={toggleTheme}>{light?"Dark Mode":"Light Mode"}</button>
    </div>
  )
}

export default ThemeSwitch
