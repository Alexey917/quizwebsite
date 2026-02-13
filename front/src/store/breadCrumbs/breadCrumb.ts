import { createSlice } from '@reduxjs/toolkit';

interface IBreadCrumb {
  categoryName: string | null;
  quizName: string | null;
}

const initialBreadCrumbState: IBreadCrumb = {
  categoryName: null,
  quizName: null,
};

const breadCrumbSlice = createSlice({
  name: 'breadCrumb',
  initialState: initialBreadCrumbState,
  reducers: {
    addCategoryName: (state, action: { payload: string }) => {
      state.categoryName = action.payload;
    },

    addQuizName: (state, action: { payload: string }) => {
      state.quizName = action.payload;
    },
  },
});

export const { addCategoryName, addQuizName } = breadCrumbSlice.actions;

export const breadCrumbReducer = breadCrumbSlice.reducer;
