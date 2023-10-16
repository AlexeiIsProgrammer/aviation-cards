import StudentsCountInput from '../StudentsCountInput';
import { Subject } from '../../API/types/interfaces';

const CountsRow = ({ subject }: { subject: Subject }) => {
  const { podgroups, uniqueId } = subject;

  return podgroups.length > 1 ? (
    <tr>
      <td>Количество человек</td>
      <td></td>
      <td>
        <StudentsCountInput
          action={{ id: uniqueId, action: 'countStudents', podgroup: 0 }}
        />
      </td>
      <td>
        <StudentsCountInput
          action={{ id: uniqueId, action: 'countStudents', podgroup: 1 }}
        />
      </td>
    </tr>
  ) : null;
};

export default CountsRow;
