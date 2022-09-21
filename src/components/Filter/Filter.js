import PropTypes from 'prop-types';
import { FilterHeader } from './Filter.styled';

export const Filter = ({ filterHeader, value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">
        <FilterHeader>{filterHeader}</FilterHeader>
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filterHeader: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
