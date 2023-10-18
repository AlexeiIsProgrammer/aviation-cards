import { SubjectsActionsType } from '../../constants';

export type UpdateSubject = {
  id: string;
  action: SubjectsActionsType;
  podgroup?: 0 | 1;
};

export type UpdateSubjectAction = UpdateSubject & { value: string };
