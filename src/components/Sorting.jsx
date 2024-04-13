import { useTask } from "../contexts/TaskContext"
import "./Sorting.css"

export const Sorting = () => {
  const { taskList, setTaskList } = useTask();

  const sortTasks = (key) => {
    const sortedTasks = [...taskList].sort((a, b) => {
      if (key === 'deadline') {
        return Date.parse(a[key]) - Date.parse(b[key]);
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
      <button className="nav-btn" onClick={() => sortTasks('importance')}>importance</button>
      <button className="nav-btn" onClick={() => sortTasks('deadline')}>deadline</button>
      <button className="nav-btn" onClick={() => sortTasks('created')}>created</button>
      <button className="nav-btn" onClick={() => sortTasks('status')}>status</button>
      <button className="nav-btn" onClick={resetSorting}>Reset </button>
    </section>
    </>
  );
};