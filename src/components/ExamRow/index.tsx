import { Subject } from '../../API/types/interfaces';
import TeachersSelect from '../TeachersSelect';

const ExamRow = ({ subject }: { subject: Subject }) => {
  const { podgroups, uniqueId } = subject;
  return (
    <tr>
      <td>Экзамен</td>
      <td></td>

      <td>
        <TeachersSelect
          isDisabled={false}
          action={{ id: uniqueId, action: 'examTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={false}
            action={{ id: uniqueId, action: 'examTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default ExamRow;
