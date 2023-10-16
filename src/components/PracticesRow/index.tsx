import TeachersSelect from '../TeachersSelect';
import { Subject } from '../../API/types/interfaces';

const PracticesRow = ({ subject }: { subject: Subject }) => {
  const { practicHours, podgroups, uniqueId } = subject;

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
