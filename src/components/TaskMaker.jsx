import { useState } from "react"
import moment from "moment"
import { useTask } from "../contexts/TaskContext"
import "./TaskMaker.css"

export const TaskMaker = () => {
  const { taskList, addTask } = useTask()
  //console.log(taskList)
  const [newTask, setNewTask] = useState({
    id: Math.floor(Math.random() * 10000000000000),
    task: "",
    status: false,
    created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
    deadline: moment().add(1, "days").calendar(), // this 24 h from now
    topic: "",
    project: "",
    importance: 2,
    visible: true,
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    })
    console.log(taskList)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.task) {
      addTask(newTask)
      setNewTask({
        id: Math.floor(Math.random() * 10000000000000),
        task: "",
        status: false,
        created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
        deadline: moment().add(1, "days").calendar(),
        topic: "",
        project: "",
        importance: 2,
        visible: true,
      })
      console.log(taskList)
    } else {
      alert("Please fill in at least a task")
    }
  }
  console.log(taskList)
  return (
    <section className='taskmaker'>
      <h2>Add a new task</h2>
      <form
        onSubmit={handleSubmit}
        className='taskmaker-wrap'>
        <article className='task-wrap'>
          <label>
            Add new to-do
            <input
              id='text-input'
              type='text'
              placeholder='Write your task here..'
              name='task'
              value={newTask.task}
              onChange={handleChange}
            />
          </label>
        </article>

        <article className='topic-wrap'>
          {" "}
          <label>
            Add a topic for the task
            <input
              id='text-input'
              type='text'
              name='topic'
              value={newTask.topic}
              onChange={handleChange}
            />
          </label>
        </article>
        <article className='project-wrap'>
          <label>
            Add a Project for the task
            <input
              id='text-input'
              type='text'
              name='project'
              value={newTask.project}
              onChange={handleChange}
            />
          </label>
        </article>
        <article className='importance-wrap'>
          <label>
            How important is this task?
            <select
              name='importance'
              id='importance'>
              <option value='1'>Critical!</option>
              <option value='2'>Important</option>
              <option value='3'>Nice to have done</option>
              <option value='4'>Not really important at all</option>
            </select>
          </label>
        </article>
        <button type='submit'>Add Task</button>
      </form>
    </section>
  )
}
