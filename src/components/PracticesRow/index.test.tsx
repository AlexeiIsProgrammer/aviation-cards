import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import PracticesRow from '.';
import { PracticesRowProps } from './types/types';

describe('test PracticesRow', () => {
  it('should render null if podgroups are empty', () => {
    const PracticesRowMockProps: PracticesRowProps = {
      practicHours: '52',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<PracticesRow {...PracticesRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const PracticesRowMockProps: PracticesRowProps = {
      practicHours: '52',
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
    renderWithProviders(<PracticesRow {...PracticesRowMockProps} />);
  });
});
