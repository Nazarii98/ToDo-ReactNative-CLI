import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterType} from '../types/Filters';

interface FilterState {
  currentFilter: FilterType;
}

const initialState: FilterState = {
  currentFilter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.currentFilter = action.payload;
    },
  },
});

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;
