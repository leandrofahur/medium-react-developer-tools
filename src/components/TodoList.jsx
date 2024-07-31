import { useState } from "react";
import TaskList from "./TaskList";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // const toggleTaskCompletion = (index) => {
  //   const updatedTasks = tasks.map((task, i) =>
  //     i === index ? { ...task, completed: !task.completed } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  // const deleteTask = (index) => {
  //   setTasks(tasks.filter((_, i) => i !== index));
  // };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {/* Here we introduce the prop drilling issue by not passing the tasks prop */}
      <TaskList />
    </div>
  );
}

export default TodoList;
