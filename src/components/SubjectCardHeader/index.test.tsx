import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import { SubjectCardHeaderProps } from './types/types';
import SubjectCardHeader from '.';

describe('test SubjectCardHeader', () => {
  it('should render component', () => {
    const SubjectCardHeaderMockProps: SubjectCardHeaderProps = {
      course: '',
      semestr: '',
      studentsNumber: '',
      groupName: '',
    };
    renderWithProviders(<SubjectCardHeader {...SubjectCardHeaderMockProps} />);
  });
});
