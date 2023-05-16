import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactList = ({ getFilteredContacts }) => {
  const valuesList = getFilteredContacts().map(input => {
    return (
      <li key={nanoid()}>
        {input.name}: {input.number}
      </li>
    );
  });
  return <ul> {valuesList}</ul>;
};
ContactList.propTypes = {
  getFilteredContacts: PropTypes.func.isRequired,
};
