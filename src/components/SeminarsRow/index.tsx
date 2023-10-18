import TeachersSelect from '../TeachersSelect';
import { SeminarsRowProps } from './types/types';

const SeminarsRow = ({
  seminarHours,
  podgroups,
  uniqueId,
}: SeminarsRowProps) => {
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
