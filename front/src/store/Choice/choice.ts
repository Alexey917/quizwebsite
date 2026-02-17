import { createSlice } from '@reduxjs/toolkit';

interface IChoice {
  rate: string;
}

const initialChoiceState: IChoice = {
  rate: '',
};

const ChoiceSlice = createSlice({
  name: 'choice',
  initialState: initialChoiceState,
  reducers: {
    addRate: (state, action: { payload: string }) => {
      state.rate = action.payload;
    },
  },
});

export const { addRate } = ChoiceSlice.actions;

export const ChoiceReducer = ChoiceSlice.reducer;
