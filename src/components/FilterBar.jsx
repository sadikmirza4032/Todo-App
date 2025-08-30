import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todos/todoSlice";

const FilterBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className="
          w-full max-w-[1240px] 
        h-auto md:h-[150px] 
        bg-white shadow-lg border border-gray-200 rounded-xl
        px-10 py-6 mt-6 mb-6 
        grid grid-cols-1 md:grid-cols-3 
        items-center gap-6
      "
    >
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src={logo} alt="Header Logo" className="h-12 w-auto" />
      </div>

      {/* Search bar */}
      <div className="flex justify-center w-full">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="🔍 Search tasks..."
          className="w-full sm:w-[90%] md:w-[400px] px-4 py-2 
                     border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-green-500 
                     placeholder-gray-400"
        />
      </div>

      {/* Filter dropdown */}
      <div className="flex justify-center md:justify-end w-full">
        <select
          className="w-full sm:w-[200px] border border-gray-300 px-4 py-2 
                     rounded-lg bg-white text-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
