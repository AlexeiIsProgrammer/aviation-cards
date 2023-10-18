import { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import { StudentsCountInputProps } from './types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSubject } from '../../store/slices/subjectSlice';
import subjectsSelector from '../../store/selectors';

const StudentsCountInput = ({ action }: StudentsCountInputProps) => {
  const { subjects } = useAppSelector(subjectsSelector);
  const dispatch = useAppDispatch();

  const selectValue = subjects.find((subject) => action.id === subject.uniqueId)
    ?.podgroups[action.podgroup || 0][action.action];

  const changeStudentsCountHandle = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSubject([{ ...action, value: e.target.value }]));

  return (
    <Form.Control
      style={{ textAlign: 'center' }}
      min={1}
      placeholder="Количество студентов"
      value={selectValue}
      onChange={changeStudentsCountHandle}
      type="number"
    />
  );
};

export default StudentsCountInput;
