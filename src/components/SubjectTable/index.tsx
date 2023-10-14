import React from 'react';
import { IconCirclePlus, IconTrashFilled } from '@tabler/icons-react';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SubjectCardProps } from '../SubjectCard/types/types';
import './styles.scss';
import TeachersSelect from '../TeachersSelect';
import LecturesSelect from '../LecturesSelect';
import StudentsCountInput from '../StudentsCountInput';
import { addSubgroup, removeSubgroup } from '../../store/slices/subjectsSlice';
import { useAppDispatch } from '../../hooks';

const SubjectTable = ({ subject }: SubjectCardProps) => {
  const dispatch = useAppDispatch();
  const {
    lecturesHours,
    laboratoryHours,
    practicHours,
    seminarHours,
    offset,
    exam,
    podgroups,
    uniqueId,
  } = subject;

  let typeOfWork: JSX.Element | null;

  switch (true) {
    case exam:
      typeOfWork = (
        <tr>
          <td>Экзамен</td>
          <td></td>

          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()}></td>
          ))}
        </tr>
      );
      break;
    case offset:
      typeOfWork = (
        <tr>
          <td>Зачет</td>
          <td></td>
          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()}></td>
          ))}
        </tr>
      );
      break;

    default:
      typeOfWork = null;
      break;
  }

  const PeopleCount =
    podgroups.length > 1 ? (
      <tr>
        <td>Количество человек</td>
        <td></td>
        {podgroups.map((podgroup) => (
          <td key={podgroup.toString()}>
            <StudentsCountInput countStudents={podgroup.countStudents} />
          </td>
        ))}
      </tr>
    ) : null;

  return (
    <Table striped bordered hover variant="light">
      <thead className="table__header">
        <tr>
          <th>Занятие</th>
          <th>Часы</th>

          <th>
            {podgroups.length > 1 ? (
              'Подгруппа 1'
            ) : (
              <>
                Преподаватель
                <IconCirclePlus
                  onClick={() => dispatch(addSubgroup(uniqueId))}
                  width="2rem"
                  style={{ cursor: 'pointer' }}
                />
              </>
            )}
          </th>
          {podgroups.length > 1 ? (
            <th>
              Подгруппа 2
              <IconTrashFilled
                onClick={() => dispatch(removeSubgroup(uniqueId))}
                width="2rem"
                style={{ cursor: 'pointer' }}
              />
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Лекции</td>
          <td>{lecturesHours}</td>

          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()} className="flex-centered-cell">
              <LecturesSelect lecturesHours={lecturesHours} />
            </td>
          ))}
        </tr>
        <tr>
          <td>Лабораторные работы</td>
          <td>{laboratoryHours}</td>

          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()}>
              <TeachersSelect isDisabled={+laboratoryHours === 0} />
            </td>
          ))}
        </tr>
        <tr>
          <td>Практические</td>
          <td>{practicHours}</td>

          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()}>
              <TeachersSelect isDisabled={+practicHours === 0} />
            </td>
          ))}
        </tr>
        <tr>
          <td>Семинарные</td>
          <td>{seminarHours}</td>

          {podgroups.map((podgroup) => (
            <td key={podgroup.toString()}>
              <TeachersSelect isDisabled={+seminarHours === 0} />
            </td>
          ))}
        </tr>
        {typeOfWork}
        {PeopleCount}
        <tr>
          <td>Примечания</td>
          <td></td>
          <td colSpan={podgroups.length}>
            <Form.Control
              as="textarea"
              placeholder="Пишите примечания здесь"
            ></Form.Control>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SubjectTable;
