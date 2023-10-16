import { Subject } from '../../API/types/interfaces';
import TeachersSelect from '../TeachersSelect';

const LecturesRow = ({ subject }: { subject: Subject }) => {
  const { lecturesHours, podgroups, uniqueId } = subject;

  return (
    <tr>
      <td>Лекции</td>
      <td>{lecturesHours}</td>

      <td className="flex-centered-cell">
        <TeachersSelect
          withButton
          isDisabled={+lecturesHours === 0}
          action={{ id: uniqueId, action: 'lectureTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td className="flex-centered-cell">
          <TeachersSelect
            withButton
            isDisabled={+lecturesHours === 0}
            action={{ id: uniqueId, action: 'lectureTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default LecturesRow;
