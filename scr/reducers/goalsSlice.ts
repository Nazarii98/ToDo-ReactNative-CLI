import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Goal} from '../types/Goal';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: [] as Goal[],
  reducers: {
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.push({
        text: action.payload.text,
        id: action.payload.id,
        completed: action.payload.completed,
      });
    },
    deleteGoal: (state, action) => {
      return state.filter(goal => goal.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const goal = state.find(g => g.id === action.payload);
      if (goal) {
        goal.completed = !goal.completed;
      }
    },
  },
});

export const {addGoal, deleteGoal, toggleComplete} = goalsSlice.actions;

export default goalsSlice.reducer;
