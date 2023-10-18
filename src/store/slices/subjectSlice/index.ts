import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SubjectsAPI from '../../../API';
import { SubjectsResponseData } from '../../../API/types/interfaces';
import { SubjectsState } from '../../types/interfaces';
import { UpdateSubjectAction } from '../../types/types';

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

export const changeSubjectsData = createAsyncThunk(
  'currency/changeSubjectsData',
  async (_, { getState }) => {
    try {
      const state: SubjectsState = getState() as SubjectsState;
      const data = await SubjectsAPI.sendSubjectsData(state);
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
      const searchedSubject = state.subjects.find(
        (el) => el.uniqueId === payload
      );
      if (searchedSubject) {
        searchedSubject.podgroups.splice(1);
        searchedSubject.countPodgroups =
          searchedSubject.podgroups.length.toString();
      }
    },
    addSubgroup(state: SubjectsState, { payload }) {
      const searchedSubject = state.subjects.find(
        (el) => el.uniqueId === payload
      );

      if (searchedSubject) {
        const totalCount = +searchedSubject.podgroups[0].countStudents;

        searchedSubject.podgroups.push({
          countStudents: String(Math.floor(totalCount / 2)),
          laboratoryTeacher: '',
          lectureTeacher: '',
          practiceTeacher: '',
          seminarTeacher: '',
          examTeacher: '',
          offsetTeacher: '',
        });

        searchedSubject.podgroups[0].countStudents = String(
          Math.round(totalCount / 2)
        );

        searchedSubject.countPodgroups =
          searchedSubject.podgroups.length.toString();
      }
    },
    updateSubject(
      state: SubjectsState,
      { payload }: { payload: UpdateSubjectAction[] }
    ) {
      payload.forEach((payloadAction) => {
        const { id, value, action, podgroup } = payloadAction;

        const searchedElement = state.subjects.find(
          (subject) => subject.uniqueId === id
        );

        if (searchedElement) {
          if (action === 'additionalInfo') {
            searchedElement[action] = value;
          } else if (podgroup !== undefined) {
            searchedElement.podgroups[podgroup][action] = value;
          }
        }
      });
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

export const { removeSubgroup, addSubgroup, updateSubject } =
  subjectsSlice.actions;

export default subjectsSlice.reducer;
