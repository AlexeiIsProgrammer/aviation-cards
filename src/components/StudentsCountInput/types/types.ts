import { UpdateSubject } from '../../../store/types/types';
import { Overwrite } from '../../../helpers';
import { StudentsCountActionTypes } from '../../../constants';

export type StudentsCountInputProps = {
  action: StudentsCountInputAction;
};

export type StudentsCountInputAction = Overwrite<
  UpdateSubject,
  { action: StudentsCountActionTypes }
>;
