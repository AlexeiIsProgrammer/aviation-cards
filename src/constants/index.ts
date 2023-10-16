interface TypedSelectActions {
  laboratoryTeacher: SelectActionsTypes;
  lectureTeacher: SelectActionsTypes;
  practiceTeacher: SelectActionsTypes;
  seminarTeacher: SelectActionsTypes;
  examTeacher: SelectActionsTypes;
  offsetTeacher: SelectActionsTypes;
}

export const SelectActions: TypedSelectActions = {
  laboratoryTeacher: 'laboratoryTeacher',
  lectureTeacher: 'lectureTeacher',
  practiceTeacher: 'practiceTeacher',
  seminarTeacher: 'seminarTeacher',
  examTeacher: 'examTeacher',
  offsetTeacher: 'offsetTeacher',
};

interface TypedSubjectActions {
  additionalInfo: SubjectActionsTypes;
}
export const SubjectActions: TypedSubjectActions = {
  additionalInfo: 'additionalInfo',
};
export interface TypedStudentsCountAction {
  countStudents: StudentsCountActionTypes;
}
export const StudentsCountAction: TypedStudentsCountAction = {
  countStudents: 'countStudents',
};

export type SelectActionsTypes =
  | 'laboratoryTeacher'
  | 'lectureTeacher'
  | 'practiceTeacher'
  | 'seminarTeacher'
  | 'examTeacher'
  | 'offsetTeacher';

export type SubjectActionsTypes = 'additionalInfo';
export type StudentsCountActionTypes = 'countStudents';

export const SubjectsActions = {
  ...SelectActions,
  ...SubjectActions,
  ...StudentsCountAction,
};
export type SubjectsActionsType =
  | SelectActionsTypes
  | SubjectActionsTypes
  | StudentsCountActionTypes;
