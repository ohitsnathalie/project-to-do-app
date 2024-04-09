import { useTask } from "../contexts/TaskContext"

export const TaskList = () => {
  const { taskList } = useTask()

  return (
    <div>
      <h1>Task List ToDo</h1>
      {taskList.map((task, index) => (
        <div key={index}>
          <h2>{task.task}</h2>
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