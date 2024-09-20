import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <form onSubmit={handleSubmitTask}>
        <input type="text" value={task} onChange={handleInputChange} />
        <input type="submit" value="Add Task" />
      </form>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
