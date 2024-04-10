import { TaskList } from "./components/TaskData.jsx"
import { TaskMaker } from "./components/TaskMaker.jsx"
import { TaskListProvider } from "./contexts/TaskContext.jsx"
import "./index.css"
import { TaskCounter } from "./components/TaskCounter.jsx"

export const App = () => {
  return (
    <TaskListProvider>
      <TaskList />
      <TaskCounter />
      <TaskMaker />
    </TaskListProvider>
  )
}
