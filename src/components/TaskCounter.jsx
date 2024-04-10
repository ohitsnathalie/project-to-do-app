
import { useTask } from "../contexts/TaskContext"

export const TaskCounter = () => {
  const { taskList } = useTask()

  const countTasks = taskList.filter((task) => task.status === false).length
  console.log(countTasks)
  const countCompletedTasks = taskList.filter((task) => task.status === true).length
  const countAllTasks = taskList.length
  return (
    <div className="taskcounter">
      <h2>Task counter</h2>
      <p>Tasks to do: {countTasks}</p>
      <p>Tasks completed: {countCompletedTasks}</p>
      <p>Total tasks: {countAllTasks}</p>
    </div>
  )
}
