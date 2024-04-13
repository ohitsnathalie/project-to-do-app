import { useTask } from "../contexts/TaskContext.jsx"
import "./TaskCounter.css"

export const TaskCounter = () => {
  const { taskList } = useTask()

  const countCompletedTasks = taskList.filter(
    (task) => task.status === true
  ).length
  const countAllTasks = taskList.length

  return (
    <div className='taskcounter'>
      <p className='total-task'>
       {countCompletedTasks} / {countAllTasks} tasks done 
      </p>
    </div>
  )
}
