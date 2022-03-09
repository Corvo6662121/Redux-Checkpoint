import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import Edit from './Edit'
import { deleteTask } from '../JS/actions/action'

const Task = ({task}) => {
const dispatch = useDispatch();
  return (
    <div style={{display:"flex" , border:"3px solid black", margin :"10px"}} >
        
        <h3> {task.text} </h3>
        <Edit task={task}  />
        <Button variant="danger" style={{marginRight:"0px 10px"}} onClick={()=>dispatch(deleteTask(task.id))}> Delete </Button>
    </div>
  )
}

export default Task