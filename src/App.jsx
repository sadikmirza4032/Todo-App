import { useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import AddEditTask from "./components/AddEditTask";
import TaskList from "./components/TaskList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const openModal = (task = null) => {
    setEditTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setEditTask(null);
    setShowModal(false);
  };

  return (
    <div className="">
      <Header></Header>
      <main>
        <FilterBar></FilterBar>
        <br />
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <button
            onClick={() => openModal()}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            + Add Task
          </button>
        </div>

        {/* Task List */}
        <TaskList onEdit={openModal} />
      </main>

      {/* Modal */}
      {showModal && <AddEditTask task={editTask} onClose={closeModal} />}
    </div>
  );
}

export default App;
