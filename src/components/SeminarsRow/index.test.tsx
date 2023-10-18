import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import SeminarsRow from '.';
import { SeminarsRowProps } from './types/types';

describe('test SeminarsRow', () => {
  it('should render null if podgroups are empty', () => {
    const SeminarsRowMockProps: SeminarsRowProps = {
      seminarHours: '52',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<SeminarsRow {...SeminarsRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const SeminarsRowMockProps: SeminarsRowProps = {
      seminarHours: '52',
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
    renderWithProviders(<SeminarsRow {...SeminarsRowMockProps} />);
  });
});
