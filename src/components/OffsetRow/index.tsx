import TeachersSelect from '../TeachersSelect';
import { OffsetRowProps } from './types/types';

const OffsetRow = ({ podgroups, uniqueId }: OffsetRowProps) => {
  return (
    <tr>
      <td>Зачет</td>
      <td></td>

      <td>
        <TeachersSelect
          isDisabled={false}
          action={{ id: uniqueId, action: 'offsetTeacher', podgroup: 0 }}
        />
      </td>
      {podgroups[1] && (
        <td>
          <TeachersSelect
            isDisabled={false}
            action={{ id: uniqueId, action: 'offsetTeacher', podgroup: 1 }}
          />
        </td>
      )}
    </tr>
  );
};

export default OffsetRow;
