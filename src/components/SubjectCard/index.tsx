import { IconBookFilled } from '@tabler/icons-react';
import { Card, Col } from 'react-bootstrap';
import SubjectTable from '../SubjectTable';
import { SubjectCardProps } from './types/types';
import SubjectCardHeader from '../SubjectCardHeader';
import './styles.scss';

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const { subjectName, groupName, course, studentsNumber, semestr } = subject;

  return (
    <Col md={6}>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="card__title">
            <IconBookFilled width="2rem" />
            {subjectName}
          </Card.Title>
          <SubjectCardHeader
            groupName={groupName}
            course={course}
            studentsNumber={studentsNumber}
            semestr={semestr}
          />
          <SubjectTable subject={subject} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SubjectCard;
