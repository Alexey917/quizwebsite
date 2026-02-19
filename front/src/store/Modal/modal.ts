import { createSlice } from '@reduxjs/toolkit';

interface IModal {
  isModal: boolean;
}

const initialChoiceState: IModal = {
  isModal: false,
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState: initialChoiceState,
  reducers: {
    setModal: (state, action: { payload: boolean }) => {
      state.isModal = action.payload;
    },
  },
});

export const { setModal } = ModalSlice.actions;

export const ModalReducer = ModalSlice.reducer;
