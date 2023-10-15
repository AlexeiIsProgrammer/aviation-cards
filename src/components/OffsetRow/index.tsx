import React from 'react';
import { Subject } from '../../API/types/interfaces';
import TeachersSelect from '../TeachersSelect';

const OffsetRow = ({ subject }: { subject: Subject }) => {
  const { podgroups, uniqueId } = subject;
  return (
    <tr>
      <td>Зачет</td>
      <td></td>

      <td>
        <TeachersSelect
          isDisabled={false}
          action={{ id: uniqueId, action: 'offsetTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={false}
            action={{ id: uniqueId, action: 'offsetTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default OffsetRow;
