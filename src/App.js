import React from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactList } from "./Components/ContactList";
import ContactForm from "./Components/ContactForm";
import { formattedNumber } from "./Helpers/formattedNumber";
import { Filter } from "./Components/Filter";
import {
  Phonebook,
  PhonebookContainer,
  Title,
  TitleContacts,
} from "./Components/Base.styled";

const INITIAL_STATE = {
  contacts: [],
  filter: "",
};

class App extends React.Component {
  state = { ...INITIAL_STATE };

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number: formattedNumber(number),
    };
    for (let i = 0; i < contacts.length; i++) {
      const normalizedName = contacts[i].name.toLowerCase();
      const oldNumber = contacts[i].number;

      if (newContact.name.toLowerCase() === normalizedName) {
        return toast.error(`Sorry, but ${name} is already in contacts!`);
      }
      if (newContact.number === oldNumber) {
        return toast.error(
          `Sorry, but ${number} belongs to ${contacts[i].name}!`
        );
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    this.resetFilter();
    toast.success(`Contact ${name} is added to Phoonebook!`);
  };

  onSearching = (e) => {
    this.setState({ filter: e.target.value });
  };
  resetFilter = () => {
    this.setState({ filter: "" });
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
    toast.info(`Contact is deleted`);
  };

componentDidMount() {
  const contacts = localStorage.getItem('contacts')
  const parsedContacts = JSON.parse(contacts)
  if(parsedContacts) {
    this.setState({contacts: parsedContacts})
  }
  
}

componentDidUpdate(prevProps, prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilterName = filter.toLowerCase();
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterName)
    );

    return (
      <Phonebook>
        <ToastContainer />
        <PhonebookContainer>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.handleSubmit} />
        </PhonebookContainer>
        <PhonebookContainer>
          <TitleContacts>Contacts</TitleContacts>
          {contacts.length > 0 ? (
            <div>
              <Filter value={filter} onChange={this.onSearching} />
              <ContactList
                contacts={filterContacts}
                onDelete={this.handleDelete}
              />
            </div>
          ) : (
            <div>This is no contacts in Phonebook</div>
          )}
        </PhonebookContainer>
      </Phonebook>
    );
  }
}

export default App;
