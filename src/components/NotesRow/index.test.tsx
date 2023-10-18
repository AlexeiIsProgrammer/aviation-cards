import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../test';
import NotesRow from '.';
import { NotesRowProps } from './types/types';

describe('test NotesRow', () => {
  it('should render null if podgroups are empty', () => {
    const NotesRowMockProps: NotesRowProps = {
      additionalInfo: 'Some additional..',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<NotesRow {...NotesRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const NotesRowMockProps: NotesRowProps = {
      additionalInfo: 'Some additional..',
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
      uniqueId: '',
    };
    renderWithProviders(<NotesRow {...NotesRowMockProps} />);
  });

  it('should change value and dispatch action', () => {
    const NotesRowMockProps: NotesRowProps = {
      additionalInfo: 'Some additional..',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<NotesRow {...NotesRowMockProps} />, {
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

    const textarea = screen.getByPlaceholderText(/Пишите примечания здесь/i);

    expect(textarea).toBeInTheDocument();

    fireEvent.change(textarea, {
      target: { value: 'Write here' },
    });
  });
});
