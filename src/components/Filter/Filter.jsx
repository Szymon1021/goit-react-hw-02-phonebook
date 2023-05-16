import PropTypes from 'prop-types';

export const Filter = ({ handleInput }) => {
  return (
    <div>
      <p> Find contacts by name</p>
      <input onChange={handleInput}></input>
    </div>
  );
};
Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
