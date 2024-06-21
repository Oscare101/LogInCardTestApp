import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Theme} from '../constants/interfaces';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'system', // dark light
  reducers: {
    updateTheme: (state, action: PayloadAction<Theme['value']>) => {
      return action.payload;
    },
  },
});

export const {updateTheme} = themeSlice.actions;
export default themeSlice.reducer;
