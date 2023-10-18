import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import ExamRow from '.';
import { ExamRowProps } from './types/types';

describe('test ExamRow', () => {
  it('should render null if podgroups are empty', () => {
    const ExamRowMockProps: ExamRowProps = {
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<ExamRow {...ExamRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const ExamRowMockProps: ExamRowProps = {
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
    renderWithProviders(<ExamRow {...ExamRowMockProps} />);
  });
});
