import StudentsCountInput from '../StudentsCountInput';
import { CountsRowProps } from './types/types';

const CountsRow = ({ podgroups, uniqueId }: CountsRowProps) => {
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
