import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test';
import { SubjectTableProps } from './types/types';
import SubjectTable from '.';

describe('test SubjectTable', () => {
  it('should render component when exam is true', () => {
    const SubjectTableMockProps: SubjectTableProps = {
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
        exam: true,
        offset: false,
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
    renderWithProviders(<SubjectTable {...SubjectTableMockProps} />);
  });
  it('should render component when offset is true', () => {
    const SubjectTableMockProps: SubjectTableProps = {
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
    renderWithProviders(<SubjectTable {...SubjectTableMockProps} />);
  });
  it('should render component when offset and exam are falsy', () => {
    const SubjectTableMockProps: SubjectTableProps = {
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
        offset: false,
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
    renderWithProviders(<SubjectTable {...SubjectTableMockProps} />);
  });
});
