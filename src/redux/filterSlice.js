
import { createSlice } from '@reduxjs/toolkit';



const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setValue(state, action) {
      return action.payload;
    },
  },
});

export const { setValue } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;