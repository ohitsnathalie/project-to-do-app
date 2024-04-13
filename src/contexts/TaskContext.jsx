import React, { createContext, useState, useEffect, useContext } from "react"
import moment from "moment"
const TaskListContext = createContext()

const TaskListProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(() => {
    const localData = localStorage.getItem('taskList');
    return localData ? JSON.parse(localData) : [
      {
        id: Math.floor(Math.random() * 10000000000000),
        task: "Make a todolist app",
        status: false,
        created: moment().format("MMMM Do YYYY, h:mm:ss a"),
        deadline:"",
        topic: "Web development",
        project: "Technigo",
        importance: 1,
        visible: true,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
    console.log(taskList)
  };

  return (
    <TaskListContext.Provider value={{ taskList, addTask, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  )
}

export { TaskListContext, TaskListProvider }
export const useTask = () => useContext(TaskListContext)
