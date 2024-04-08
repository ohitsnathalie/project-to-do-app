import { useState } from "react"
import moment from "moment"
import { useTask } from "../contexts/TaskContext"

export const TaskMaker = () => {
	const { taskList, addTask } = useTask()
	const [newTask, setNewTask] = useState({
		task: "",
		status: false,
		created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
		deadline: moment().add(1, "days").calendar(), // this 24 h from now
		topic: "",
		project: "",
		importance: 2,
		visible: true,
	})

	// const handleDate = (date) => {
	// 	const newDate = new Date(date)
	// 	return moment(newDate).calendar()
	// }

	const handleChange = (event) => {
		setNewTask({
			...newTask,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (newTask.task) {
			addTask(newTask)
			setNewTask({
				task: "",
				status: false,
				created: isDate,
				deadline: isDate,
				topic: "",
				project: "",
				importance: 2,
				visible: true,
			})
		} else {
			alert("Please fill in at least a task")
		}
	}

	return (
		<>
			<h1>Add a new task</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Add new todo
					<input
						type='text'
						name='task'
						value={newTask.task}
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>Add Task</button>
			</form>
		</>
	)
}
