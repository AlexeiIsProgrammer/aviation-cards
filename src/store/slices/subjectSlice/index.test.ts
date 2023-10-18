import { afterEach, describe, expect, it, vi } from 'vitest';
import subjectsReducer, { fetchSubjects } from '.';
import { SubjectsState } from '../../types/interfaces';
import SubjectsAPI from '../../../API';
import { SubjectsResponseData } from '../../../API/types/interfaces';

vi.mock('../../../API/index.ts');

describe('subjectsSlice', () => {
  const initialState: SubjectsState = {
    subjects: [],
    teachers: [],
    error: '',
    isLoading: false,
  };

  it('should return initial state', () => {
    const result = subjectsReducer(undefined, { type: '' });
    expect(result).toStrictEqual(initialState);
  });
});

describe('fetchSubjects', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return subjects', async () => {
    const subjects: SubjectsResponseData = {
      data: [
        {
          subjectName: 'Авиационная электроника и цифровые устройства',
          course: '4',
          semestr: '7',
          studentsNumber: '22',
          groupName: 'П120',
          lecturesHours: '50',
          laboratoryHours: '10',
          practicHours: '0',
          seminarHours: '0',
          exam: true,
          offset: false,
          additionalInfo: 'Пары кроме субботы',
          countPodgroups: '1',
          uniqueId: '65300c6bb1239',
          podgroups: [
            {
              countStudents: '22',
              laboratoryTeacher: '',
              lectureTeacher: '',
              practiceTeacher: '',
              seminarTeacher: '',
              examTeacher: '',
              offsetTeacher: '',
            },
          ],
        },
        {
          subjectName: 'Авиационная электроника и цифровые устройства',
          course: '4',
          semestr: '7',
          studentsNumber: '22',
          groupName: 'П122',
          lecturesHours: '50',
          laboratoryHours: '10',
          practicHours: '0',
          seminarHours: '0',
          exam: true,
          offset: true,
          additionalInfo: '',
          countPodgroups: '1',
          uniqueId: '65300c6bb123c',
          podgroups: [
            {
              countStudents: '22',
              laboratoryTeacher: '',
              lectureTeacher: '',
              practiceTeacher: '',
              seminarTeacher: '',
              examTeacher: '',
              offsetTeacher: '',
            },
          ],
        },
        {
          subjectName: 'Авиационная электроника и цифровые устройства',
          course: '3',
          semestr: '5',
          studentsNumber: '21',
          groupName: 'P120',
          lecturesHours: '50',
          laboratoryHours: '10',
          practicHours: '20',
          seminarHours: '0',
          exam: false,
          offset: true,
          additionalInfo: '',
          countPodgroups: '2',
          uniqueId: '65300c6bb123d',
          podgroups: [
            {
              countStudents: '11',
              laboratoryTeacher: '',
              lectureTeacher: '',
              practiceTeacher: '',
              seminarTeacher: '',
              examTeacher: '',
              offsetTeacher: '',
            },
            {
              countStudents: '10',
              laboratoryTeacher: '',
              lectureTeacher: '',
              practiceTeacher: '',
              seminarTeacher: '',
              examTeacher: '',
              offsetTeacher: '',
            },
          ],
        },
      ],
      teachers: [
        {
          id: '10',
          name: 'Иванов Иван Сергеевич',
        },
        {
          id: '11',
          name: 'Сидоров Иван Иванович',
        },
        {
          id: '12',
          name: 'Петров дмитрий Иванович',
        },
        {
          id: '13',
          name: 'Клименко Иван Иванович',
        },
      ],
    };
    SubjectsAPI.getSubjectsData = vi
      .mocked(SubjectsAPI.getSubjectsData)
      .mockResolvedValueOnce(subjects);

    const dispatch = vi.fn();
    const thunk = fetchSubjects();
    await thunk(dispatch, () => {}, {});
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(fetchSubjects.pending.type);
    expect(end[0].type).toBe(fetchSubjects.fulfilled.type);
    expect(end[0].payload).toBe(subjects);
  });
});
