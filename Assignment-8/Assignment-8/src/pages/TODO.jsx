import React, { useRef, useState } from 'react'
import TaskCard from '../components/TaskCard'

const TODO = () => {
    const task=useRef(null)
    const date=useRef(null)
    const time=useRef(null)
    const [tasks,setTasks]=useState([])
    const addTask=(e)=>{
        e.preventDefault()
        if(task.current.value==="" || date.current.value==="" || time.current.value===""){
            alert("Enter all the values")
            return
        }
        let taskToAdd=task.current.value
        let dateToAdd=date.current.value
        let timeToAdd=time.current.value
        let id=Math.random()*100+timeToAdd;
        let newTask={id,taskToAdd,dateToAdd,timeToAdd}
        setTasks([...tasks,newTask])
        task.current.value=""
        date.current.value=""
        time.current.value=""
        
    }
    const deleteTask=(id)=>{
        let newTasks=tasks.filter(task=>task.id!=id)
        setTasks(newTasks)
    }
  return (
    <>
        <form action="post" onSubmit={addTask}>
            <input type='text' ref={task} placeholder='Enter the task'></input><br/>
            <label>Enter the date</label>
            <input type='date' ref={date}></input><br/>
            <label>Enter the time</label>
            <input type='time' ref={time}></input><br/>
            <button type="submit">Submit</button>
        </form>
        {
            tasks.map(task=>(
                <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
            ))
        }
      
    </>
  )
}

export default TODO
