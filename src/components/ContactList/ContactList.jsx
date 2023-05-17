import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactList.module.css';

export const ContactList = ({ getFilteredContacts, deleteFunction }) => {
  const valuesList = getFilteredContacts().map(input => {
    return (
      <li className={styles.contactlist} key={nanoid()}>
        {input.name}: {input.number}
        <button type="button" onClick={() => deleteFunction(input.id)}>
          delete
        </button>
      </li>
    );
  });
  return <ul className={styles.list}> {valuesList}</ul>;
};

ContactList.propTypes = {
  getFilteredContacts: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
