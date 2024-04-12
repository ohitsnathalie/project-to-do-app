import { useTask } from "../contexts/TaskContext"
import "./TaskCounter.css"

export const TaskCounter = () => {
  const { taskList } = useTask()

  const countTasks = taskList.filter((task) => task.status === false).length
  console.log(countTasks)
  const countCompletedTasks = taskList.filter(
    (task) => task.status === true
  ).length
  const countAllTasks = taskList.length


  return (
    <div className='taskcounter'>
      <h2>Tasks to be done</h2>
      <div className='counter-container'>
        <div className='do-complete'>
        <p className='total-task'>{countTasks}/{countAllTasks}</p>
          <p>Completed so far: {countCompletedTasks}</p>
        </div>


      </div>
    </div>
  )
}
