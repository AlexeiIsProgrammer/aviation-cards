import { Form } from 'react-bootstrap';
import { Subject } from '../../API/types/interfaces';
import { useAppDispatch } from '../../hooks';
import { updateSubject } from '../../store/slices/subjectsSlice';

const NotesRow = ({ subject }: { subject: Subject }) => {
  const { podgroups, additionalInfo, uniqueId } = subject;
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td>Примечания</td>
      <td></td>
      <td colSpan={podgroups.length}>
        <Form.Control
          value={additionalInfo}
          onChange={(e) => {
            dispatch(
              updateSubject([
                {
                  id: uniqueId,
                  action: 'additionalInfo',
                  value: e.target.value,
                },
              ])
            );
          }}
          as="textarea"
          placeholder="Пишите примечания здесь"
        ></Form.Control>
      </td>
    </tr>
  );
};

export default NotesRow;
