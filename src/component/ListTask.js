import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {

    const listtask = useSelector((state)=>state.task.listTask)
    console.log(listtask)
  return (
    <div>
        {listtask.map(
            (el)=> <Task task={el} key={el.id} />
        )}
    </div>
  )
}

export default ListTask