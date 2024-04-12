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

  //tasks completed today
  const today = new Date()
  const todayString = today.toDateString()
  const countTasksToday = taskList.filter((task) =>
    task.created.includes(todayString)
  ).length

  return (
    <div className='taskcounter'>
      <h2>Task counter</h2>
      <div className='counter-container'>
        <div className='do-complete'>
          <p>To do: {countTasks}</p>
          <p>Completed: {countCompletedTasks}</p>
        </div>
        <p className='total-task'>Total tasks: {countAllTasks}</p>
      </div>
    </div>
  )
}
