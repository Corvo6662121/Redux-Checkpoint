import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Button } from 'react-bootstrap'
import {addTASK} from "../JS/actions/action"
const AddTask = () => {
    const [text , setText] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault();

        if(text.trim()){
            dispatch(addTASK ({id:Math.random(),text:text , isDone:false}))
            setText('')
        }else{
            alert("cannot add an empty task")
        }

    }

  return (
    <Form style={{margin:"20px 200px",display:"flex"}} onSubmit={handleChange} >
  <Form.Group className="mb-3" >
    <Form.Label>Add Task</Form.Label>
    <Form.Control type="text" placeholder="Enter your Task" onChange={(e)=>setText(e.target.value)}  name="text"  value={text} />
  </Form.Group>
  <Button variant="primary" onClick={handleChange} >
    Add
  </Button>
</Form>
  )
}

export default AddTask