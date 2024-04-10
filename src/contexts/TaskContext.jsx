import React, { createContext, useState, useContext } from "react"
import moment from "moment"
const TaskListContext = createContext()

const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([
    {
      id: Math.floor(Math.random() * 10000000000000),
      task: "Make a todolist app",
      status: false,
      created: moment().format("MMMM Do YYYY, h:mm:ss a"),
      deadline: moment().add(5, "days").calendar(),
      topic: "Web development",
      project: "Technigo",
      importance: 1,
      visible: true,
    },
  ])

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
    console.log(taskList)
  }

  return (
    <TaskListContext.Provider value={{ taskList, addTask, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  )
}

export { TaskListContext, TaskListProvider }
export const useTask = () => useContext(TaskListContext)
