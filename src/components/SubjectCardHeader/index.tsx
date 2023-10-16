import { Table } from 'react-bootstrap';
import { SubjectCardProps } from '../SubjectCard/types/types';
import './styles.scss';

const SubjectCardHeader = ({ subject }: SubjectCardProps) => {
  const { groupName, course, studentsNumber, semestr } = subject;
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
