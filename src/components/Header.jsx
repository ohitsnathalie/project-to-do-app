import "./Header.css"
import { TaskCounter } from "./TaskCounter.jsx"

export const Header = () => {
  return (
    <div className='header-container'>
      <h1>Task Master</h1>
      <TaskCounter />
    </div>
  )
}
