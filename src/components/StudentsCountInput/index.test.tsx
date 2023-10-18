import { describe, expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test';
import { StudentsCountInputProps } from './types/types';
import StudentsCountInput from '.';

describe('test StudentsCountInput', () => {
  it('should render component', () => {
    const StudentsCountInputMockProps: StudentsCountInputProps = {
      action: {
        id: '12345',
        action: 'countStudents',
        podgroup: 0,
      },
    };
    renderWithProviders(
      <StudentsCountInput {...StudentsCountInputMockProps} />,
      {
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
      }
    );

    const input = screen.getByPlaceholderText(/Количество студентов/i);

    expect(input).toBeInTheDocument();
  });

  it('should change value and dispatch action', () => {
    const StudentsCountInputMockProps: StudentsCountInputProps = {
      action: {
        id: '1',
        action: 'countStudents',
        podgroup: 0,
      },
    };
    renderWithProviders(
      <StudentsCountInput {...StudentsCountInputMockProps} />
    );

    const input = screen.getByPlaceholderText(/Количество студентов/i);

    fireEvent.input(input, {
      target: {
        value: 12,
      },
    });
  });
});
