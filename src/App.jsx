import { TaskList } from "./components/TaskData.jsx"
import { TaskMaker } from "./components/TaskMaker.jsx"
import { TaskListProvider } from "./contexts/TaskContext.jsx"
import "./index.css"
import { Header } from "./components/Header.jsx"
import { Sorting } from "./components/Sorting.jsx"
import { TaskCounter } from "./components/TaskCounter.jsx"

export const App = () => {
  return (
    <div className='todo-app'>
      <TaskListProvider>
        <Header />
        <TaskCounter />
        <TaskMaker />
        <Sorting  />
        <TaskList />
      </TaskListProvider>
    </div>
  )
}
