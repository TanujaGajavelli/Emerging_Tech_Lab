import React from 'react'

const TaskCard = ({task,deleteTask}) => {    
  return (
    <div className='container '>
      <div className='row'>
      <div className="card d-flex flex-wrap col-6">
          <p className="card-text" style={{color:"black"}}>Task:{task.taskToAdd}</p>
          <p className="card-text" style={{color:"black"}}>Date:{task.dateToAdd}</p>
          <p className="card-text" style={{color:"black"}}>Time:{task.timeToAdd}</p>
          <button onClick={()=>deleteTask(task.id)}>Delete task</button>
      </div>
      </div>
    </div>
  )
}

export default TaskCard
