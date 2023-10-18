import { IconTrashFilled, IconCirclePlus } from '@tabler/icons-react';
import { addSubgroup, removeSubgroup } from '../../store/slices/subjectSlice';
import { useAppDispatch } from '../../hooks';
import { SubjectTableHeaderProps } from './types/types';
import './styles.scss';

const SubjectTableHeader = ({
  podgroups,
  uniqueId,
}: SubjectTableHeaderProps) => {
  const dispatch = useAppDispatch();

  const addSubgroupHandle = () => dispatch(addSubgroup(uniqueId));
  const removeSubgroupHandle = () => dispatch(removeSubgroup(uniqueId));

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
              <button
                type="button"
                onClick={addSubgroupHandle}
                title="Добавить подгруппу"
              >
                <IconCirclePlus width="2rem" style={{ cursor: 'pointer' }} />
              </button>
            </>
          )}
        </th>
        {podgroups.length > 1 ? (
          <th>
            Подгруппа 2
            <button
              type="button"
              onClick={removeSubgroupHandle}
              title="Удалить подгруппу"
            >
              <IconTrashFilled width="2rem" style={{ cursor: 'pointer' }} />
            </button>
          </th>
        ) : null}
      </tr>
    </thead>
  );
};

export default SubjectTableHeader;
