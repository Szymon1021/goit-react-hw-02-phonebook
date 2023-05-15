import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      number: '',
    };
  }

  handleChangeName = evt => {
    evt.preventDefault();

    this.setState({
      name: evt.target.value,
    });
  };

  handleChangeNumber = evt => {
    evt.preventDefault();

    this.setState({
      number: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const name = this.state.name;
    const number = this.state.number;

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ],
    }));
  };

  render() {
    const valuesList = this.state.contacts.map(item => {
      return (
        <li key={nanoid()}>
          {item.name}: {item.number}
        </li>
      );
    });

    return (
      <>
        <h2>Phonebook </h2>

        <form className={styles.contact}>
          <h4>Name</h4>
          <div>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChangeName}
            />
          </div>
          <div>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChangeNumber}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit} type="addContact">
              Add contact
            </button>
          </div>
          <div>
            <h2>Contacts </h2>
            <p>{valuesList}</p>
          </div>
        </form>
      </>
    );
  }
}
export default MyForm;
