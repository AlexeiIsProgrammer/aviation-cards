import { IconTrashFilled, IconCirclePlus } from '@tabler/icons-react';
import { addSubgroup, removeSubgroup } from '../../store/slices/subjectsSlice';
import { useAppDispatch } from '../../hooks';
import { Subject } from '../../API/types/interfaces';

const SubjectTableHeader = ({ subject }: { subject: Subject }) => {
  const dispatch = useAppDispatch();
  const { podgroups, uniqueId } = subject;

  return (
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
  );
};

export default SubjectTableHeader;
