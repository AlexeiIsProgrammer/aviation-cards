export enum SelectActions {
  'laboratoryTeacher' = 'laboratoryTeacher',
  'lectureTeacher' = 'lectureTeacher',
  'practiceTeacher' = 'practiceTeacher',
  'seminarTeacher' = 'seminarTeacher',
  'examTeacher' = 'examTeacher',
  'offsetTeacher' = 'offsetTeacher',
}

export enum SubjectActions {
  'additionalInfo' = 'additionalInfo',
}
export enum StudentsCountAction {
  'countStudents' = 'countStudents',
}

export const SubjectsActions = {
  ...SelectActions,
  ...SubjectActions,
  ...StudentsCountAction,
};

export type SubjectsActionsType = typeof SubjectsActions;
