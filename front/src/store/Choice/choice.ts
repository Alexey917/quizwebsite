import { createSlice } from '@reduxjs/toolkit';

type TRate = {
  id: number | null;
  name: string;
};

interface IChoice {
  rate: TRate;
  title: string;
}

const initialChoiceState: IChoice = {
  rate: {
    id: null,
    name: '',
  },
  title: '',
};

const ChoiceSlice = createSlice({
  name: 'choice',
  initialState: initialChoiceState,
  reducers: {
    addRate: (state, action: { payload: TRate }) => {
      state.rate.id = action.payload.id;
      state.rate.name = action.payload.name;
    },

    addTitle: (state, action: { payload: string }) => {
      state.title = action.payload;
    },
  },
});

export const { addRate, addTitle } = ChoiceSlice.actions;

export const ChoiceReducer = ChoiceSlice.reducer;
