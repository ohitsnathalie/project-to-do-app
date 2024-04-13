import { TaskList } from "./components/TaskData.jsx"
import { TaskMaker } from "./components/TaskMaker.jsx"
import { TaskListProvider } from "./contexts/TaskContext.jsx"
import "./index.css"
import { Header } from "./components/Header.jsx"

export const App = () => {
  return (
    <div className='todo-app'>
      <TaskListProvider>
        <Header />
        <TaskMaker />
        <TaskList />
      </TaskListProvider>
    </div>
  )
}
