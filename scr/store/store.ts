import {configureStore} from '@reduxjs/toolkit';
import goalsReducer from '../reducers/goalsSlice';
import filterReducer from '../reducers/filterSlice';

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
