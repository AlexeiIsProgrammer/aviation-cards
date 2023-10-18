import { Subject, Teacher } from '../../API/types/interfaces';

export interface SubjectsState {
  subjects: Subject[];
  teachers: Teacher[];

  isLoading: boolean;
  error: string;
}
