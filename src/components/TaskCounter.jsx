import { useTask } from "../contexts/TaskContext.jsx"
import "./TaskCounter.css"

export const TaskCounter = () => {
  const { taskList } = useTask()
  // count the number of tasks that are not completed
  // const countTasks = taskList.filter((task) => task.status === false).length

  //count the number of tasks that are completed
  //  console.log(countTasks)
  //count the number of all tasks
  const countCompletedTasks = taskList.filter(
    (task) => task.status === true
  ).length
  const countAllTasks = taskList.length

  return (
    <div className='taskcounter'>
      <h2>Tasks to be done</h2>
      <p className='total-task'>
        {countCompletedTasks} / {countAllTasks} tasks
      </p>
    </div>
  )
}
