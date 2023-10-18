import { Table } from 'react-bootstrap';
import './styles.scss';
import ExamRow from '../ExamRow';
import OffsetRow from '../OffsetRow';
import CountsRow from '../CountsRow';
import SubjectTableHead from '../SubjectTableHeader';
import LecturesRow from '../LecturesRow';
import LaboratoriesRow from '../LaboratoriesRow';
import PracticesRow from '../PracticesRow';
import SeminarsRow from '../SeminarsRow';
import NotesRow from '../NotesRow';
import { SubjectTableProps } from './types/types';

const SubjectTable = ({ subject }: SubjectTableProps) => {
  const {
    offset,
    exam,
    podgroups,
    uniqueId,
    lecturesHours,
    laboratoryHours,
    practicHours,
    seminarHours,
    additionalInfo,
  } = subject;

  let typeOfWork: JSX.Element | null;

  switch (true) {
    case exam:
      typeOfWork = <ExamRow podgroups={podgroups} uniqueId={uniqueId} />;
      break;
    case offset:
      typeOfWork = <OffsetRow podgroups={podgroups} uniqueId={uniqueId} />;
      break;

    default:
      typeOfWork = null;
      break;
  }

  return (
    <Table responsive striped bordered hover variant="light">
      <SubjectTableHead podgroups={podgroups} uniqueId={uniqueId} />
      <tbody>
        <LecturesRow
          lecturesHours={lecturesHours}
          podgroups={podgroups}
          uniqueId={uniqueId}
        />
        <LaboratoriesRow
          laboratoryHours={laboratoryHours}
          podgroups={podgroups}
          uniqueId={uniqueId}
        />
        <PracticesRow
          practicHours={practicHours}
          podgroups={podgroups}
          uniqueId={uniqueId}
        />
        <SeminarsRow
          seminarHours={seminarHours}
          podgroups={podgroups}
          uniqueId={uniqueId}
        />
        {typeOfWork}
        <CountsRow podgroups={podgroups} uniqueId={uniqueId} />
        <NotesRow
          additionalInfo={additionalInfo}
          podgroups={podgroups}
          uniqueId={uniqueId}
        />
      </tbody>
    </Table>
  );
};

export default SubjectTable;
