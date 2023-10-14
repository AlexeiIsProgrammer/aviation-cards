import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { StudentsCountInputProps } from './types/types';

const StudentsCountInput = ({ countStudents }: StudentsCountInputProps) => {
  const [count, setCount] = useState(countStudents);

  return (
    <Form.Control
      value={count}
      onChange={(e) => setCount(e.target.value)}
      type="number"
    />
  );
};

export default StudentsCountInput;
