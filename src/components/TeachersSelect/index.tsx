import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, InputGroup } from 'react-bootstrap';
import { IconSortDescending } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import subjectsSelector from '../../store/selectors';
import { TeachersSelectProps } from './types/types';
import { updateSubject } from '../../store/slices/subjectsSlice';
import { SubjectsActions } from '../../constants';

const TeachersSelect = ({
  isDisabled,
  withButton,
  action,
}: TeachersSelectProps) => {
  const { teachers, subjects } = useAppSelector(subjectsSelector);
  const dispatch = useAppDispatch();

  const selectValue = subjects.find((subject) => action.id === subject.uniqueId)
    ?.podgroups[action.podgroup || 0][action.action];

  const setAllValues = () => {
    dispatch(
      updateSubject(
        Object.keys(SubjectsActions).map((subjectAction) => ({
          ...action,
          value: selectValue,
          action: subjectAction,
        }))
      )
    );
  };

  return (
    <InputGroup className="mb-3">
      <Form.Select
        disabled={isDisabled}
        onChange={(e) => {
          dispatch(updateSubject([{ ...action, value: e.target.value }]));
        }}
        value={selectValue}
      >
        <option value="-1">Вакансия</option>

        {!isDisabled &&
          teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </option>
          ))}
      </Form.Select>
      {withButton && (
        <Button onClick={setAllValues} variant="primary">
          <IconSortDescending color="white" />
        </Button>
      )}
    </InputGroup>
  );
};

export default TeachersSelect;
