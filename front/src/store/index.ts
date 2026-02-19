import { configureStore } from '@reduxjs/toolkit';
import { ChoiceReducer } from './Choice/choice';
import { ModalReducer } from './Modal/modal';

export const store = configureStore({
  reducer: {
    choice: ChoiceReducer,
    modal: ModalReducer,
  },
});

export const getChoice = (state: RootState) => state.choice;
export const getModal = (state: RootState) => state.modal.isModal;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
