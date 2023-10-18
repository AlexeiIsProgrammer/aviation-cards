import { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  changeSubjectsData,
  fetchSubjects,
} from '../store/slices/subjectSlice';
import subjectsSelector from '../store/selectors';
import SubjectCard from '../components/SubjectCard';

function App() {
  const dispatch = useAppDispatch();

  const { subjects, error, isLoading } = useAppSelector(subjectsSelector);

  const saveChangesHandle = () => dispatch(changeSubjectsData());

  useEffect(() => {
    dispatch(fetchSubjects());
  }, []);

  let content: JSX.Element | JSX.Element[];

  switch (true) {
    case isLoading:
      content = (
        <Spinner
          title="Loading"
          animation="border"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      );
      break;

    case error !== '':
      content = <Alert variant="danger">{error}</Alert>;
      break;

    case subjects.length === 0:
      content = <Alert variant="info">Никаких предметов нет !</Alert>;
      break;

    default:
      content = (
        <>
          {subjects.map((subject) => (
            <SubjectCard key={subject.uniqueId} subject={subject} />
          ))}
          <Button
            className="mt-2"
            style={{ width: '100%' }}
            size="lg"
            variant="success"
            onClick={saveChangesHandle}
          >
            Сохранить
          </Button>
        </>
      );
      break;
  }

  return (
    <Container>
      <Row>{content}</Row>
    </Container>
  );
}

export default App;
