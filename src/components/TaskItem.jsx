import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/todos/todoSlice";
import { FaCheck, FaUndo, FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center border p-3 rounded-2xl shadow bg-white gap-3 mt-8">
      
      {/* Left Section */}
      <div className="flex-1 flex items-start gap-3">
        {/* Done/Undo Button */}
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className={`p-2 rounded-full transition-colors duration-200 ${
            task.completed
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {task.completed ? <FaUndo /> : <FaCheck />}
        </button>

        {/* Task Details */}
        <div>
          <h3
            className={`font-bold ${
              task.completed ? "line-through text-gray-500" : "" }`}
          >
            {task.title}
          </h3>
          <p className="text-sm">{task.description}</p>
        </div>
      </div>

      {/* Middle Section: Date */}
      <div className="flex justify-center sm:w-32">
        <span className="text-xs text-gray-500">{task.date}</span>
      </div>

      {/* Right Section: Action Icons */}
      <div className="flex flex-wrap gap-2 sm:justify-end">
        {/* Edit */}
        <button
          onClick={() => onEdit(task)}
          className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors duration-200"
        >
          <FaEdit />
        </button>

        {/* Delete */}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;