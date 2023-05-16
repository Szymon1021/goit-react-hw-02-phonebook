import MyForm from 'components/MyForm/MyForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
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
  render() {
    return (
      <div>
        <h1> Phonebook</h1>
        <MyForm
          state={this.state}
          handleChangeName={this.handleChangeName}
          handleSubmit={this.handleSubmit}
          handleChangeNumber={this.handleChangeNumber}
        />
        <h2> Contacts</h2>
        <Filter handleInput={this.handleInput} />
        <ContactList getFilteredContacts={this.getFilteredContacts} />
      </div>
    );
  }
}
