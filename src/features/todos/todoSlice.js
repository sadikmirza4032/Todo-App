import { createSlice } from "@reduxjs/toolkit";



const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("todoState");
    return data ? JSON.parse(data) : { tasks: [], filter: "All" };
  } catch {
    return { tasks: [], filter: "All" };
  }
};




const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("todoState", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};




const initialState = loadFromLocalStorage();



const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
        completed: false,
      });
      saveToLocalStorage(state);
    },


    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      saveToLocalStorage(state);
    },


    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveToLocalStorage(state);
    },

    
    updateTask: (state, action) => {
      const { id, title, description, date } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.date = date;
      }
      saveToLocalStorage(state);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const { addTask, toggleTask, deleteTask, updateTask, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
