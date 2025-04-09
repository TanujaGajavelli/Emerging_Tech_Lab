import React, { useRef, useState } from 'react'

const Login = () => {
    const users={"Tanuja":"123"};
    const [login,setLogin]=useState(false)
    const userName=useRef(null)
    const passWord=useRef(null)
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(userName.current.value=="" || userName.current.value==""){
            alert("Please enter username and password")
            return
        }
        else if(users[userName.current.value] && users[userName.current.value]==passWord.current.value){
            setLogin(true)
        }
        else{
            alert("Invalid username or password")
        }

    }
    return (
        <>
        {
            login?(
                <p>Welcome back!!</p>
            ):(
            <>
                <p>Please login in!!</p>
                <form>
                    <input type='text' 
                        ref={userName}
                        placeholder='Enter your username' 
                        name='user' required/>
                    <input type='password' 
                        ref={passWord}
                        placeholder='Enter your password' 
                        name='pass' required/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                </>
            )

        }
        </>
        
    )
}

export default Login
