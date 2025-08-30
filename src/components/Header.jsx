import { useSelector } from "react-redux";

const Header = () => {
  const { tasks } = useSelector((state) => state.todo);

  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="max-w-screen-xl w-full mx-auto mt-5 mb-5 bg-white shadow-md border border-gray-200 rounded-xl flex items-center justify-center px-6 py-4">
      <div className="flex flex-wrap justify-between w-full text-gray-700 font-semibold text-lg gap-4 sm:gap-10">

        <span className="hover:text-blue-500">All: {tasks.length}</span>
        <span className="hover:text-green-500">Active: {activeCount}</span>
        <span className="hover:text-purple-500">Complete: {completedCount}</span>

        
      </div>
    </div>
  );
};

export default Header;


