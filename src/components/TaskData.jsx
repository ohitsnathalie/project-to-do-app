import { updateLocale } from "moment/moment"
import { useTask } from "../contexts/TaskContext"
import { useState } from "react"


export const TaskList = () => {
  const { taskList, newTask, setTaskList } = useTask()



  const handleCheckbox = (event) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id.toString() === event.target.id) {
        return { ...task, status: !task.status };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const deleteTask = (event) => {
    const updatedTaskList = taskList.filter((task) => {
      return task.id.toString() !== event.target.id;
    });

    setTaskList(updatedTaskList);
  };







  return (
    <section className="todo">
      <h1>Task List ToDo</h1>

      {taskList.map((task, index) => (
        <div className="reminder" key={index}>
          <h2>{task.task}</h2>
          <input
            type="checkbox"
            id={task.id}
            name="status"
            onChange={(event) => handleCheckbox(event)}
          />
          <label htmlFor="status">Done</label>
          <input
            type="checkbox"
            id={task.id}
            name="visible"
            onChange={(event) => deleteTask(event)}
          />
          <label htmlFor="visible">Delete task</label>

          <p>Created: {task.created}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Topic: {task.topic}</p>
          <p>Project: {task.project}</p>
          <p>Importance: {task.importance}</p>
          <p>Status: {task.status ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </section>
  )
}