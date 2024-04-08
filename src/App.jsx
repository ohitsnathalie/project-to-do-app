import { TaskMaker } from "./components/TaskMaker.jsx"
import { TaskListProvider } from "./contexts/TaskContext.jsx"

export const App = () => {
	return (
		<TaskListProvider>
			<>
				<TaskMaker />
			</>
		</TaskListProvider>
	)
}
