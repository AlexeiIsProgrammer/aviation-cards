import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import OffsetRow from '.';
import { OffsetRowProps } from './types/types';

describe('test OffsetRow', () => {
  it('should render null if podgroups are empty', () => {
    const OffsetRowMockProps: OffsetRowProps = {
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(<OffsetRow {...OffsetRowMockProps} />);
  });

  it('should render component if podgroups are not empty', () => {
    const OffsetRowMockProps: OffsetRowProps = {
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
    renderWithProviders(<OffsetRow {...OffsetRowMockProps} />);
  });
});
