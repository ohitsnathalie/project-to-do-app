import { useTask } from "../contexts/TaskContext"
import moment from "moment"
import "./TaskData.css"

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

    setTaskList(updatedTaskList);


  }

  return (

    <section className='tasklist-container'>
      <div className='todo'>
        {taskList.map((task, id) => (
          <div
            className='todo-item'
            key={task.id}>
            <div className='todo-wrapper'>
              <input
                type='checkbox'
                id={task.id}
                name='status'
                onChange={(event) => handleCheckbox(event)}
              />
              <label htmlFor='status'>
                {" "}
                <h3 className='task-name'>{task.task}</h3>
              </label>
            </div>

            <div className='details-container'>
              <p
                id='detail-titles'
                className='created'>
                 {task.created}
              </p>
              <details className='more-details-wrapper'>
                <summary>More details</summary>
                <p
                  id='detail-titles'
                  className='deadline'>
                  <span>Deadline: </span>
                  {moment(task.deadline).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
                <p
                  id='detail-titles'
                  className='topic'>
                  <span>Topic: </span>
                  {task.topic}
                </p>
                <p
                  id='detail-titles'
                  className='project'>
                  <span>Project: </span>
                  {task.project}
                </p>
              </details>
              <p
                id='detail-titles'
                className=''>
                <span>Priority: </span>
                {task.importance}
              </p>
              <p
                id='detail-titles'
                className='status'>
                {task.status ? "Finished" : "Not done yet"}
              </p>
            </div>
            <button
              className='delete-btn'
              id={task.id}
              name='visible'
              onClick={(event) => deleteTask(event)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
