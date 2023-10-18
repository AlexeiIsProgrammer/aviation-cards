import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import LecturesRow from '.';
import { LecturesRowProps } from './types/types';

describe('test LecturesRow', () => {
  it('should render null if podgroups are empty', () => {
    const LecturesRowMockProps: LecturesRowProps = {
      lecturesHours: '20',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<LecturesRow {...LecturesRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const LecturesRowMockProps: LecturesRowProps = {
      lecturesHours: '20',
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
    renderWithProviders(<LecturesRow {...LecturesRowMockProps} />);
  });
});
