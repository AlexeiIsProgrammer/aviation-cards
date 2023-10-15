import React from 'react';
import { Table } from 'react-bootstrap';
import { SubjectCardProps } from '../SubjectCard/types/types';
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

const SubjectTable = ({ subject }: SubjectCardProps) => {
  const { offset, exam } = subject;

  let typeOfWork: JSX.Element | null;

  switch (true) {
    case exam:
      typeOfWork = <ExamRow subject={subject} />;
      break;
    case offset:
      typeOfWork = <OffsetRow subject={subject} />;
      break;

    default:
      typeOfWork = null;
      break;
  }

  return (
    <Table striped bordered hover variant="light">
      <SubjectTableHead subject={subject} />
      <tbody>
        <LecturesRow subject={subject} />
        <LaboratoriesRow subject={subject} />
        <PracticesRow subject={subject} />
        <SeminarsRow subject={subject} />
        {typeOfWork}
        <CountsRow subject={subject} />
        <NotesRow subject={subject} />
      </tbody>
    </Table>
  );
};

export default SubjectTable;
