import Form from 'react-bootstrap/Form';
import { StudentsCountInputProps } from './types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSubject } from '../../store/slices/subjectsSlice';
import subjectsSelector from '../../store/selectors';

const StudentsCountInput = ({ action }: StudentsCountInputProps) => {
  const { subjects } = useAppSelector(subjectsSelector);
  const dispatch = useAppDispatch();

  const selectValue = subjects.find((subject) => action.id === subject.uniqueId)
    ?.podgroups[action.podgroup || 0][action.action];

  return (
    <Form.Control
      style={{ textAlign: 'center' }}
      min={1}
      value={selectValue}
      onChange={(e) =>
        dispatch(updateSubject([{ ...action, value: e.target.value }]))
      }
      type="number"
    />
  );
};

export default StudentsCountInput;
