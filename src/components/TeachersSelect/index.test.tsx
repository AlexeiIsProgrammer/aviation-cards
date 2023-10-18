import { describe, expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test';
import { TeachersSelectProps } from './types/types';
import TeachersSelect from '.';

describe('test TeachersSelect', () => {
  it('should render component', () => {
    const TeachersSelectMockProps: TeachersSelectProps = {
      isDisabled: false,
      withButton: true,
      action: {
        id: '1',
        action: 'lectureTeacher',
        podgroup: 0,
      },
    };
    renderWithProviders(<TeachersSelect {...TeachersSelectMockProps} />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: '',
          subjects: [
            {
              subjectName: '',
              course: '',
              semestr: '',
              studentsNumber: '',
              groupName: '',
              lecturesHours: '',
              laboratoryHours: '',
              practicHours: '',
              seminarHours: '',
              exam: false,
              offset: true,
              additionalInfo: '',
              countPodgroups: '',
              uniqueId: '12345',
              podgroups: [
                {
                  laboratoryTeacher: '',
                  lectureTeacher: '',
                  countStudents: '',
                  practiceTeacher: '',
                  seminarTeacher: '',
                  examTeacher: '',
                  offsetTeacher: '',
                },
              ],
            },
          ],
        },
      },
    });

    const select = screen.getByPlaceholderText(/Выбрать.../i);

    expect(select).toBeInTheDocument();

    const button = screen.getByTitle(/Установить для всех/i);

    expect(button).toBeInTheDocument();
  });
  it('should change value and dispatch action', () => {
    const TeachersSelectMockProps: TeachersSelectProps = {
      isDisabled: false,
      withButton: true,
      action: {
        id: '1',
        action: 'lectureTeacher',
        podgroup: 0,
      },
    };
    renderWithProviders(<TeachersSelect {...TeachersSelectMockProps} />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [
            {
              id: '10',
              name: 'Иванов Иван Сергеевич',
            },
          ],
          isLoading: false,
          error: '',
          subjects: [
            {
              subjectName: '',
              course: '',
              semestr: '',
              studentsNumber: '',
              groupName: '',
              lecturesHours: '',
              laboratoryHours: '',
              practicHours: '',
              seminarHours: '',
              exam: false,
              offset: true,
              additionalInfo: '',
              countPodgroups: '',
              uniqueId: '12345',
              podgroups: [
                {
                  laboratoryTeacher: '',
                  lectureTeacher: '',
                  countStudents: '',
                  practiceTeacher: '',
                  seminarTeacher: '',
                  examTeacher: '',
                  offsetTeacher: '',
                },
              ],
            },
          ],
        },
      },
    });

    const select = screen.getByPlaceholderText(/Выбрать.../i);

    expect(select).toBeInTheDocument();

    fireEvent.change(select, {
      target: { value: '10' },
    });
  });

  it('should click button', () => {
    const TeachersSelectMockProps: TeachersSelectProps = {
      isDisabled: false,
      withButton: true,
      action: {
        id: '12345',
        action: 'lectureTeacher',
        podgroup: 0,
      },
    };
    renderWithProviders(<TeachersSelect {...TeachersSelectMockProps} />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: '',
          subjects: [
            {
              subjectName: '',
              course: '',
              semestr: '',
              studentsNumber: '',
              groupName: '',
              lecturesHours: '',
              laboratoryHours: '',
              practicHours: '',
              seminarHours: '',
              exam: false,
              offset: true,
              additionalInfo: '',
              countPodgroups: '',
              uniqueId: '12345',
              podgroups: [
                {
                  laboratoryTeacher: '',
                  lectureTeacher: 'Teacher',
                  countStudents: '',
                  practiceTeacher: '',
                  seminarTeacher: '',
                  examTeacher: '',
                  offsetTeacher: '',
                },
              ],
            },
          ],
        },
      },
    });

    const button = screen.getByTitle(/Установить для всех/i);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
  });
});
