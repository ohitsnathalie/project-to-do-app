import { useState } from "react"
import moment from "moment"
import { useTask } from "../contexts/TaskContext"
import "./TaskMaker.css"

export const TaskMaker = () => {
  const { taskList, addTask } = useTask()

  const [newTask, setNewTask] = useState({
    id: Math.floor(Math.random() * 10000000000000),
    task: "",
    status: false,
    created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
    deadline: "",
    topic: "",
    project: "",
    importance: "",
    visible: true,
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.task) {
      addTask(newTask)
      setNewTask({
        id: Math.floor(Math.random() * 10000000000000),
        task: "",
        status: false,
        created: moment().format("MMMM Do YYYY, h:mm a"), //this is right now
        deadline:"April 10th 2024, 12:34 pm",
        topic: "",
        project: "",
        importance: "",
        visible: true,
      })

    } else {
      alert("Please fill in at least a task")
    }
  }

  return (
    <section className='taskmaker'>
      <h2>✏️ Add a new task</h2>
      <form
        onSubmit={handleSubmit}
        className='taskmaker-wrap'>
        <article className='task-wrap'>
          <label>
            Add new to-do<span>* </span>
            <br />
            <input
              id='task-input'
              type='text'
              placeholder=' What do you need to do?'
              name='task'
              value={newTask.task}
              onChange={handleChange}
            />
          </label>
        </article>

        <details>
          <summary>More settings</summary>
          <article className='topic-wrap'>


            <label>
              Add a deadline for the task <br />
              <input
                id='date-input'
                type='datetime-local'
                name='deadline'
                value={newTask.deadline}
                onChange={handleChange} />
              </label>


            <label>
              Add a topic for the task <br />
              <input
                id='topic-input'
                type='text'
                name='topic'
                value={newTask.topic}
                onChange={handleChange}
              />
            </label>
          </article>

          <article className='project-wrap'>
            <label>
              Add a Project for the task <br />
              <input
                id='project-input'
                type='text'
                name='project'
                value={newTask.project}
                onChange={handleChange}
              />
            </label>
          </article>
        </details>
        <article className='importance-wrap'>
          <label>
            How important is this task?<span>* </span>
            <br />
            <select
          name='importance'
          id='importance'
          value={newTask.importance}
          onChange={handleChange}
        >
           <option value=''>Pick a value ▾</option>
          <option value='1'>⚠️ Critical!</option>
          <option value='2'>❗ Important</option>
          <option value='3'>🔔 Nice to have done</option>
          <option value='4'>📌 Not really important at all</option>
        </select>
      </label>
    </article>
        <button
          type='submit'
          className='submit-btn'>
          Add Task
        </button>
      </form>
    </section>
  )
}
