import { useTask } from "../contexts/TaskContext"
import { useState } from "react"

export const TaskList = () => {
  const { taskList, setTaskList } = useTask()



  const handleCheckbox = (event, index) => {
    let status = taskList[index].status
    status === true ? taskList[index].status=false : taskList[index].status=true
    console.log(taskList)
  }

  const deleteTask = (index) => {
    taskList.splice(index, 1)
    //setTaskList(updatedTaskList)
  }






  return (
    <div>
      <h1>Task List ToDo</h1>
      {taskList.map((task, index) => (
        <div key={index}>
          <h2>{task.task}</h2>
          <input
  type="checkbox"
  id="status"
  name="status"
  onChange={(event) => handleCheckbox(event, index)}
/>
<label htmlFor="status">Done</label>
<input
  type="checkbox"
  id="visible"
  name="visible"
  onChange={(event) => deleteTask(event, index)}
/>
<label htmlFor="visible">Delete task</label>

          <p>Created: {task.created}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Topic: {task.topic}</p>
          <p>Project: {task.project}</p>
          <p>Importance: {task.importance}</p>
          <p>Status: {task.status ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </div>
  )
}