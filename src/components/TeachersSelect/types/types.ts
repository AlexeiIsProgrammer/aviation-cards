import { SelectActionsTypes } from '../../../constants';
import { Overwrite } from '../../../helpers';
import { UpdateSubject } from '../../../store/types/types';

export type TeachersSelectProps = {
  isDisabled: boolean;
  withButton?: boolean;
  action: TeachersAction;
};

export type TeachersAction = Overwrite<
  UpdateSubject,
  { action: SelectActionsTypes }
>;
