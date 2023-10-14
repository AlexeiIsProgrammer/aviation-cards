import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../hooks';
import subjectsSelector from '../../store/selectors';
import { TeachersSelectProps } from './types/types';

const TeachersSelect = ({ isDisabled }: TeachersSelectProps) => {
  const { teachers } = useAppSelector(subjectsSelector);

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <Form.Select
      disabled={isDisabled}
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
    >
      <option value="-1">Вакансия</option>

      {!isDisabled &&
        teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
    </Form.Select>
  );
};

export default TeachersSelect;
