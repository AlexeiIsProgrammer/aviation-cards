import TeachersSelect from '../TeachersSelect';
import { Subject } from '../../API/types/interfaces';

const LaboratoriesRow = ({ subject }: { subject: Subject }) => {
  const { laboratoryHours, podgroups, uniqueId } = subject;
  return (
    <tr>
      <td>Лабораторные работы</td>
      <td>{laboratoryHours}</td>

      <td>
        <TeachersSelect
          isDisabled={+laboratoryHours === 0}
          action={{ id: uniqueId, action: 'laboratoryTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={+laboratoryHours === 0}
            action={{ id: uniqueId, action: 'laboratoryTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default LaboratoriesRow;
