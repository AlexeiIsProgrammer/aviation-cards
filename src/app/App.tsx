import { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchSubjects } from '../store/slices/subjectsSlice';
import subjectsSelector from '../store/selectors';
import SubjectCard from '../components/SubjectCard';

function App() {
  const dispatch = useAppDispatch();

  const { subjects, error, isLoading } = useAppSelector(subjectsSelector);

  let content: JSX.Element | JSX.Element[];

  switch (true) {
    case isLoading:
      content = <Spinner animation="border" />;
      break;

    case error !== '':
      content = <Alert variant="danger">{error}</Alert>;
      break;

    case subjects.length === 0:
      content = <Alert variant="info">Никаких предметов нет !</Alert>;
      break;

    default:
      content = subjects.map((subject) => (
        <SubjectCard key={subject.uniqueId} subject={subject} />
      ));
      break;
  }

  useEffect(() => {
    dispatch(fetchSubjects());
  }, []);

  return (
    <Container>
      <Row>{content}</Row>
      <Button variant="success">Сохранить</Button>
    </Container>
  );
}

export default App;
