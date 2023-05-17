import MyForm from 'components/MyForm/MyForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filterKey: '',
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

    const form = evt.currentTarget;
    const name = this.state.name;
    const number = this.state.number;
    const islnArray = this.state.contacts.find(
      contact => contact.name === name
    );
    if (islnArray) {
      alert(`${name} is already in contacts`);
      return;
    } else {
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
    }

    /*this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ],
    }));
  */
    form.reset();
  };

  handleInput = evt => {
    this.setState({
      filterKey: evt.target.value,
    });
  };

  getFilteredContacts = () => {
    if (this.state.filterKey) {
      return this.state.contacts.filter(con =>
        con.name.toLowerCase().includes(this.state.filterKey)
      );
    }
    return this.state.contacts;
  };

  deleteFunction = id => {
    const newFilteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newFilteredContacts,
    });
  };

  render() {
    return (
      <div>
        <h1> Phonebook</h1>
        <MyForm
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeNumber={this.handleChangeNumber}
        />
        <h2> Contacts</h2>
        <Filter handleInput={this.handleInput} />
        <ContactList
          getFilteredContacts={this.getFilteredContacts}
          deleteFunction={this.deleteFunction}
        />
      </div>
    );
  }
}
