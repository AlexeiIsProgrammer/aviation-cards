import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test';
import App from './App';

describe('test App', () => {
  it("should render component if it's a loading", async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: true,
          error: '',
          subjects: [
            {
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
          ],
        },
      },
    });

    // expect(await screen.findByText('Loading')).toBeInTheDocument();
  });
  it("should render component if it's an error", async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: "It's error",
          subjects: [
            {
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
          ],
        },
      },
    });

    // expect(await screen.findByText("It's error")).toBeInTheDocument();
  });
  it("should render component if it's an empty subjects array", async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: '',
          subjects: [],
        },
      },
    });

    // expect(
    //   await screen.findByText('Никаких предметов нет !')
    // ).toBeInTheDocument();
  });
  it("should render component if it's not an empty subjects array", async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: '',
          subjects: [
            {
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
          ],
        },
      },
    });

    // expect(await screen.getByText('Сохранить')).toBeInTheDocument();
  });
  it('should click save button', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        subjectsReducer: {
          teachers: [],
          isLoading: false,
          error: '',
          subjects: [
            {
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
          ],
        },
      },
    });

    // const button = await screen.getByText(/Сохранить/i);

    // expect(button).toBeInTheDocument();

    // fireEvent.click(button);
  });
});
