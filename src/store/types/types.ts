import { SubjectsActions } from '../../constants';

export type UpdateSubject = {
  id: string;
  action: SubjectsActions;
  podgroup?: 0 | 1;
};

export type UpdateSubjectAction = UpdateSubject & { value: string };
