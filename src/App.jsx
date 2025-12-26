import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const BaseURL = "http://localhost:5000/api";

  const addTask = async (e) => {
    e.preventDefault();

    if (!task || !description) return;

    await axios.post(`${BaseURL}/task`, {
      title: task,
      description,
    });

    setTask("");
    setDescription("");
    fetchTasks();
  };

  const fetchTasks = async () => {
    const res = await axios.get(`${BaseURL}/task`);
    setList(res.data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
const DeleteTask = async (id) => {
  await axios.delete(`${BaseURL}/task/${id}`);
  fetchTasks();
};


  return (
    <div className="app-container">
      <h1 className="heading">Task Manager</h1>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {list.length > 0 ? (
          list.map((item, index) => (
            <div className="task-card" key={item._id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <button
  className="delete-btn"
  onClick={() => DeleteTask(item._id)}
>
  ✕
</button>
            </div>
          ))
        ) : (
          <p className="empty">No tasks added</p>
        )}
      </div>
    </div>
  );
}

export default App;
