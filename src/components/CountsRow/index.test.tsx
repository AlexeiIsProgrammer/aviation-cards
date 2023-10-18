import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import CountsRow from '.';
import { CountsRowProps } from './types/types';

describe('test CountRow', () => {
  it('should render null if podgroups are empty', () => {
    const CountsRowMockProps: CountsRowProps = {
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<CountsRow {...CountsRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const CountsRowMockProps: CountsRowProps = {
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
    renderWithProviders(<CountsRow {...CountsRowMockProps} />);
  });
});
