import TeachersSelect from '../TeachersSelect';
import { ExamRowProps } from './types/types';

const ExamRow = ({ podgroups, uniqueId }: ExamRowProps) => {
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
