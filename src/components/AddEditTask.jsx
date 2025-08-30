import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/todos/todoSlice";

const AddEditTask = ({ task, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDate(task.date);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = () => {
    if (!title) return;
    if (task) {
      dispatch(updateTask({ id: task.id, title, date, description }));
    } else {
      dispatch(addTask({ title, date, description }));
    }
    onClose();
  };

  return (
    <div className="">
      <div>
        <h1 className="text-4xl">Tasks</h1>
      </div>
      <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow w-96">
            
            <h2 className="text-xl font-bold mb-4">
              {task ? "Edit Task" : "Add Task"}
            </h2>

            <input
              className="border p-2 w-full mb-2"
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="border p-2 w-full mb-2"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-end space-x-2">
              <button onClick={onClose} className="px-4 py-2 border rounded">
                Close
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded">
                {task ? "Update" : "Add"}
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditTask;
