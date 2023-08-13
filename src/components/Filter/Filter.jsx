import css from './Filter.module.css';
import { setFilterValue, selectFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const userQueryFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const searchInputId = nanoid();

  const handleFilterChange = e => {
    const userQuery = e.target.value;
    dispatch(setFilterValue(userQuery));
  };

  return (
    <div className={css.filtercontainer}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        id={searchInputId}
        value={userQueryFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
