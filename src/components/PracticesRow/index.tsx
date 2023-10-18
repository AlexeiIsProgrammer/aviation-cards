import TeachersSelect from '../TeachersSelect';
import { PracticesRowProps } from './types/types';

const PracticesRow = ({
  practicHours,
  podgroups,
  uniqueId,
}: PracticesRowProps) => {
  return (
    <tr>
      <td>Практические</td>
      <td>{practicHours}</td>

      <td>
        <TeachersSelect
          isDisabled={+practicHours === 0}
          action={{ id: uniqueId, action: 'practiceTeacher', podgroup: 0 }}
        />
      </td>

      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={+practicHours === 0}
            action={{ id: uniqueId, action: 'practiceTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default PracticesRow;
