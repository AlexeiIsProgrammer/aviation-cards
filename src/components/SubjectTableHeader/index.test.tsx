import { describe, expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test';
import { SubjectTableHeaderProps } from './types/types';
import SubjectTableHeader from '.';

describe('test SubjectTableHeader', () => {
  it('should render null if podgroups are empty', () => {
    const SubjectTableHeaderMockProps: SubjectTableHeaderProps = {
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(
      <SubjectTableHeader {...SubjectTableHeaderMockProps} />
    );
  });

  it('should render component if podgroups are not empty', () => {
    const SubjectTableHeaderMockProps: SubjectTableHeaderProps = {
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
    renderWithProviders(
      <SubjectTableHeader {...SubjectTableHeaderMockProps} />
    );
  });

  it('should click add subgroup', async () => {
    const SubjectTableHeaderMockProps: SubjectTableHeaderProps = {
      podgroups: [],
      uniqueId: '',
    };
    renderWithProviders(
      <SubjectTableHeader {...SubjectTableHeaderMockProps} />
    );

    const addButton: HTMLButtonElement =
      await screen.findByTitle(/Добавить подгруппу/i);

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);
  });
  it('should click remove subgroup', async () => {
    const SubjectTableHeaderMockProps: SubjectTableHeaderProps = {
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
    renderWithProviders(
      <SubjectTableHeader {...SubjectTableHeaderMockProps} />
    );

    const removeButton = await screen.findByTitle(/Удалить подгруппу/i);

    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);
  });
});
