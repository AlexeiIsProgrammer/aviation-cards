import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { updateSubject } from '../../store/slices/subjectSlice';
import { NotesRowProps } from './types/types';

const NotesRow = ({ podgroups, additionalInfo, uniqueId }: NotesRowProps) => {
  const dispatch = useAppDispatch();

  const changeNoteHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateSubject([
        {
          id: uniqueId,
          action: 'additionalInfo',
          value: e.target.value,
        },
      ])
    );
  };

  return (
    <tr>
      <td>Примечания</td>
      <td></td>
      <td colSpan={podgroups.length}>
        <Form.Control
          value={additionalInfo}
          onChange={changeNoteHandle}
          as="textarea"
          placeholder="Пишите примечания здесь"
        ></Form.Control>
      </td>
    </tr>
  );
};

export default NotesRow;
