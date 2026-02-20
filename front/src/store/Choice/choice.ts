import { createSlice } from '@reduxjs/toolkit';

interface IChoice {
  rate: string;
  title: string;
}

const initialChoiceState: IChoice = {
  rate: '',
  title: '',
};

const ChoiceSlice = createSlice({
  name: 'choice',
  initialState: initialChoiceState,
  reducers: {
    addRate: (state, action: { payload: string }) => {
      state.rate = action.payload;
    },

    addTitle: (state, action: { payload: string }) => {
      state.title = action.payload;
    },
  },
});

export const { addRate, addTitle } = ChoiceSlice.actions;

export const ChoiceReducer = ChoiceSlice.reducer;
