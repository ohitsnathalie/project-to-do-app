import { updateLocale } from "moment/moment"
import { useTask } from "../contexts/TaskContext"
import { useState } from "react"
import "./TaskData.css"
import Trash from "../assets/trash1.svg"

export const TaskList = () => {
  const { taskList, newTask, setTaskList } = useTask()

  const handleCheckbox = (event) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id.toString() === event.target.id) {
        // if the task id is equal to the event target id, return the task with the status flipped
        return { ...task, status: !task.status }
      }
      return task
    })

    setTaskList(updatedTaskList)
  }

  const deleteTask = (event) => {
    const updatedTaskList = taskList.filter((task) => {
      // if the task id is not equal to the event target id, keep it in the list
      return task.id.toString() !== event.target.id
    })

    setTaskList(updatedTaskList)
  }

  return (
    <section className='todo'>
      <h1>Task List ToDo</h1>

      {taskList.map((task, id) => (
        <div
          className='todo-item'
          key={task.id}>
          <h2>{task.task}</h2>
          <div className='todo-wrapper'>
            <input
              type='checkbox'
              id={task.id}
              name='status'
              onChange={(event) => handleCheckbox(event)}
            />
            <label htmlFor='status'> Done</label>
          </div>
          <div className='details-container'>
            <p>Created: {task.created}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Topic: {task.topic}</p>
            <p>Project: {task.project}</p>
            <p>Importance: {task.importance}</p>
            <p>Status: {task.status ? "Completed" : "Not completed"}</p>
          </div>
          <input
            className='delete-btn'
            type='button'
            id={task.id}
            name='visible'
            value='Delete task'
            onClick={(event) => deleteTask(event)}
          />
        </div>
      ))}
    </section>
  )
}
