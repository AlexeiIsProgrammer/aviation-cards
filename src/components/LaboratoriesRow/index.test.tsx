import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import LaboratoriesRow from '.';
import { LaboratoriesRowProps } from './types/types';

describe('test LaboratoriesRow', () => {
  it('should render null if podgroups are empty', () => {
    const LaboratoriesRowMockProps: LaboratoriesRowProps = {
      laboratoryHours: '20',
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<LaboratoriesRow {...LaboratoriesRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const LaboratoriesRowMockProps: LaboratoriesRowProps = {
      laboratoryHours: '20',
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
    renderWithProviders(<LaboratoriesRow {...LaboratoriesRowMockProps} />);
  });
});
