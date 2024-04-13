import { useTask } from "../contexts/TaskContext"
import "./Sorting.css"

export const Sorting = () => {
  const { taskList, setTaskList } = useTask();

  const sortTasks = (key) => {
    const sortedTasks = [...taskList].sort((a, b) => {
      if (key === 'deadline') {
        return Date.parse(a[key]) - Date.parse(b[key]);
      } else if (typeof a[key] === 'string') {
        return a[key].localeCompare(b[key]);
      } else {
        return a[key] - b[key];
      }
    });
    setTaskList(sortedTasks);
  };





  const resetSorting = () => {
    setTaskList([...taskList]);
  };

  return (

    <> <h2>🔍 Sort tasks</h2 >
    <section className="sorting">
      <button className="nav-btn" onClick={() => sortTasks('importance')}>Importance</button>
      <button className="nav-btn" onClick={() => sortTasks('deadline')}>Deadline</button>
      <button className="nav-btn" onClick={() => sortTasks('created')}>Created</button>
      <button className="nav-btn" onClick={() => sortTasks('status')}>Status</button>
      <button className="nav-btn" onClick={() => sortTasks('topic')}>Topic</button>
      <button className="nav-btn" onClick={() => sortTasks('project')}>Project</button>
      <button className="nav-btn" onClick={resetSorting}>Reset </button>
    </section>
    </>
  );
};