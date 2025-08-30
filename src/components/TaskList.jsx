import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
  const { tasks, filter } = useSelector((state) => state.todo);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="mt-4 space-y-2">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={onEdit} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
