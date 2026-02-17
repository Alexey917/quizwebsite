import { configureStore } from '@reduxjs/toolkit';
import { ChoiceReducer } from './Choice/choice';

export const store = configureStore({
  reducer: {
    choice: ChoiceReducer,
  },
});

export const getChoice = (state: RootState) => state.choice;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
