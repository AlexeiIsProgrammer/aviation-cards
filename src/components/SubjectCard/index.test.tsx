import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import { SubjectCardProps } from './types/types';
import SubjectCard from '.';

describe('test SubjectCard', () => {
  it('should render component', () => {
    const SubjectCardMockProps: SubjectCardProps = {
      subject: {
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
    };
    renderWithProviders(<SubjectCard {...SubjectCardMockProps} />);
  });
});
