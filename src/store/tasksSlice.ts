import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action: PayloadAction<Task>) {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = action.payload;
      }
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
