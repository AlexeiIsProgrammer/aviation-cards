/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SubjectsAPI from '../../API';
import { SubjectsResponseData } from '../../API/types/interfaces';
import { SubjectsState } from '../types/interfaces';

export const fetchSubjects = createAsyncThunk(
  'currency/fetchSubjects',
  async (): Promise<SubjectsResponseData | undefined> => {
    try {
      const data = await SubjectsAPI.getSubjectsData();
      if (data) {
        return data;
      }
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
);

const initialState: SubjectsState = {
  subjects: [],
  teachers: [],

  isLoading: false,
  error: '',
};

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    removeSubgroup(state: SubjectsState, { payload }) {
      state.subjects
        .find((el) => el.uniqueId === payload)
        ?.podgroups.splice(0, 1);
    },
    addSubgroup(state: SubjectsState, { payload }) {
      const changedSubject = state.subjects.find(
        (el) => el.uniqueId === payload
      );

      if (changedSubject) {
        const totalCount = +changedSubject.podgroups[0].countStudents;

        changedSubject.podgroups.push({
          countStudents: String(Math.floor(totalCount / 2)),
          laboratoryTeacher: '',
          lectureTeacher: '',
          practiceTeacher: '',
          seminarTeacher: '',
          examTeacher: '',
          offsetTeacher: '',
        });

        changedSubject.podgroups[0].countStudents = String(
          Math.round(totalCount / 2)
        );
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSubjects.pending, (state: SubjectsState) => {
      state.error = '';
      state.isLoading = true;
    });
    builder.addCase(fetchSubjects.fulfilled, (state: SubjectsState, action) => {
      state.isLoading = false;

      if (action.payload) {
        state.subjects = action.payload.data;
        state.teachers = action.payload.teachers;
      }
    });
    builder.addCase(fetchSubjects.rejected, (state: SubjectsState, action) => {
      state.isLoading = false;

      if (action.error.message) state.error = action.error.message;
    });
  },
});

export const { removeSubgroup, addSubgroup } = subjectsSlice.actions;

export default subjectsSlice.reducer;
