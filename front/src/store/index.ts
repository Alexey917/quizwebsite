import { configureStore } from '@reduxjs/toolkit';
import { breadCrumbReducer } from './breadCrumbs/breadCrumb';

export const store = configureStore({
  reducer: {
    breadcrumb: breadCrumbReducer,
  },
});

export const getBreadcrumb = (state: RootState) => state.breadcrumb;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
