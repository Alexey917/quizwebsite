import { createSlice } from '@reduxjs/toolkit';

type TRate = {
  id: number | null;
  name: string;
};

interface IChoice {
  rate: TRate;
  title: TRate;
  status: string;
}

const initialChoiceState: IChoice = {
  rate: {
    id: null,
    name: '',
  },
  title: {
    name: '',
    id: null,
  },
  status: '',
};

const ChoiceSlice = createSlice({
  name: 'choice',
  initialState: initialChoiceState,
  reducers: {
    addRate: (state, action: { payload: TRate }) => {
      state.rate.id = action.payload.id;
      state.rate.name = action.payload.name;
    },

    addTitle: (state, action: { payload: TRate }) => {
      state.title.name = action.payload.name;
      state.title.id = action.payload.id;
    },

    setStatus: (state, action: { payload: string }) => {
      state.status = action.payload;
    },
  },
});

export const { addRate, addTitle, setStatus } = ChoiceSlice.actions;

export const ChoiceReducer = ChoiceSlice.reducer;
