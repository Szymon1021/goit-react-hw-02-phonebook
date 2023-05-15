import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './MyForm.module.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
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
    //ss*/
    const form = evt.currentTarget;
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
    form.reset();
  };

  handleInput = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  getFilteredContacts() {
    if (this.state.filter) {
      return this.state.contacts.filter(con =>
        con.name.toLowerCase().includes(this.state.filter)
      );
    }

    return this.state.contacts;
  }

  /* handleFilter = (evt) => {
    const query = evt.target.value.toLowerCase().trim();
    const filter = this.state.contacts.name.filter((contact) => 
      contact.name.toLowerCase().includes(query)
    )
  };
*/
  render() {
    const valuesList = this.getFilteredContacts().map(item => {
      return (
        <li key={nanoid()}>
          {item.name}: {item.number}
        </li>
      );
    });

    return (
      <>
        <h2>Phonebook </h2>

        <form className={styles.contact} onSubmit={this.handleSubmit}>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
              onChange={this.handleChangeName}
            />
          </div>
          <div>
            <h4>Number</h4>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Number"
              onChange={this.handleChangeNumber}
            />
          </div>
          <div>
            <button type="addContact">Add contact</button>
          </div>
        </form>
        <div>
          <h2>Contacts </h2>
          <p> Find contacts by name</p>
          <input onChange={this.handleInput}></input>
          <ul>{valuesList}</ul>
        </div>
      </>
    );
  }
}
export default MyForm;
