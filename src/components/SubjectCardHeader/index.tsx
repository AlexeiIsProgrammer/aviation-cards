import { Table } from 'react-bootstrap';
import { SubjectCardHeaderProps } from './types/types';

const SubjectCardHeader = ({
  groupName,
  course,
  studentsNumber,
  semestr,
}: SubjectCardHeaderProps) => {
  return (
    <Table striped variant="light">
      <tbody>
        <tr>
          <th>Группа</th>
          <th>{groupName}</th>
          <th>Курс</th>
          <th>{course}</th>
        </tr>
        <tr>
          <th>Количество курсантов</th>
          <th>{studentsNumber}</th>
          <th>Семестр</th>
          <th>{semestr}</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default SubjectCardHeader;
