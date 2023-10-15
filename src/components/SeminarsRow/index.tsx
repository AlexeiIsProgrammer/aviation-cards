import React from 'react';
import { Subject } from '../../API/types/interfaces';
import TeachersSelect from '../TeachersSelect';

const SeminarsRow = ({ subject }: { subject: Subject }) => {
  const { seminarHours, podgroups, uniqueId } = subject;
  return (
    <tr>
      <td>Семинарные</td>
      <td>{seminarHours}</td>

      <td>
        <TeachersSelect
          isDisabled={+seminarHours === 0}
          action={{ id: uniqueId, action: 'seminarTeacher', podgroup: 0 }}
        />
      </td>

      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={+seminarHours === 0}
            action={{ id: uniqueId, action: 'seminarTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default SeminarsRow;
