import { useState } from "react"
import moment from "moment"
import { useTask } from "../contexts/TaskContext"

export const TaskMaker = () => {
	const { taskList, addTask } = useTask()
  console.log(taskList)

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


	const handleChange = (event) => {
		setNewTask({
			...newTask,
			[event.target.name]: event.target.value,
		})
    console.log(taskList)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (newTask.task) {
			addTask(newTask)
			setNewTask({
				task: "",
				status: false,
				created: moment().format("MMMM Do YYYY, h:mm:ss a"), //this is right now
		deadline: moment().add(1, "days").calendar(),
				topic: "",
				project: "",
				importance: 2,
				visible: true,
			})
      console.log(taskList)
		} else {
			alert("Please fill in at least a task")
		}
	}
  console.log(taskList)
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
