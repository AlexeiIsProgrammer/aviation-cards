import React from 'react';
import { IconSortDescending } from '@tabler/icons-react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TeachersSelect from '../TeachersSelect';
import { LecturesSelectProps } from './types/types';

const LecturesSelect = ({ lecturesHours }: LecturesSelectProps) => {
  return (
    <InputGroup className="mb-3">
      <TeachersSelect isDisabled={+lecturesHours === 0} />
      <Button variant="primary">
        <IconSortDescending color="white" />
      </Button>
    </InputGroup>
  );
};

export default LecturesSelect;
