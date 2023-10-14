import React from 'react';
import { IconBookFilled } from '@tabler/icons-react';
import { Card, Col } from 'react-bootstrap';
import SubjectTable from '../SubjectTable';
import { SubjectCardProps } from './types/types';
import SubjectHeader from '../SubjectHeader';
import './styles.scss';

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const { subjectName } = subject;

  return (
    <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title className="card__style">
            <IconBookFilled width="2rem" />
            {subjectName}
          </Card.Title>
          <SubjectHeader subject={subject} />
          <SubjectTable subject={subject} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SubjectCard;
