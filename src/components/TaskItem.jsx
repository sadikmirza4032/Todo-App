import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/todos/todoSlice";
import { FaCheck, FaUndo, FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center bg-white shadow-lg border border-gray-300 rounded-2xl px-6 py-5 my-6 gap-5">
      {/* Left Section */}
      <div className="flex-1 flex items-center gap-4">

        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className={`p-3 rounded-full transition-colors duration-200 shrink-0 ${
            task.completed
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white text-lg`}
        >
          {task.completed ? <FaUndo /> : <FaCheck />}
        </button>

        {/* Task Details */}
        <div className="flex flex-col">
          <h3
            className={`font-bold text-lg ${
              task.completed ? "text-gray-500" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      </div>

      <div className="flex justify-center sm:w-40">
        <span className="text-sm text-gray-500">{task.date}</span>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap gap-3 sm:justify-end">
        <button
          onClick={() => onEdit(task)}
          className="p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors duration-200 text-lg"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200 text-lg"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
