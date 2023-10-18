import TeachersSelect from '../TeachersSelect';
import { LecturesRowProps } from './types/types';

const LecturesRow = ({
  lecturesHours,
  podgroups,
  uniqueId,
}: LecturesRowProps) => {
  return (
    <tr>
      <td>Лекции</td>
      <td>{lecturesHours}</td>

      <td>
        <TeachersSelect
          withButton
          isDisabled={+lecturesHours === 0}
          action={{ id: uniqueId, action: 'lectureTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td>
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
