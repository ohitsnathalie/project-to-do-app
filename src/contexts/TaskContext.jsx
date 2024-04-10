import { createContext, useState, useContext } from "react"
import moment from "moment"

const TaskListContext = createContext()
const TaskListData = [
  {
    task: "Make a todolist app",
    status: false,
    created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
    deadline: moment().add(5, "days").calendar(), // this 24 h from now
    topic: "Web development",
    project: "Technigo",
    importance: 1,
    visible: true,
  },
]

export const TaskListProvider = ({ children }) => {
  const [newTask, setNewTask] = useState([TaskListData])

  //remember to add ID!

  return (
    <TaskListContext.Provider value={{ newTask, setNewTask }}>
      {children}
    </TaskListContext.Provider>
  )
}

export const useTask = () => useContext(TaskListContext)
